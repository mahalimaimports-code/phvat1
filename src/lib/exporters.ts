type CsvValue = string | number | null | undefined;
type CsvRow = Record<string, CsvValue>;

const normalizeValue = (value: CsvValue) => {
  if (value === null || value === undefined) return "";
  if (typeof value === "number") return value.toString();
  return value;
};

const escapeCsv = (value: CsvValue) => {
  const stringValue = normalizeValue(value);
  if (stringValue === "") return "";
  const needsQuotes = /[",\n]/.test(stringValue);
  const escaped = stringValue.replace(/"/g, '""');
  return needsQuotes ? `"${escaped}"` : escaped;
};

export const buildCsv = (rows: CsvRow[], headers?: string[]) => {
  if (rows.length === 0 && (!headers || headers.length === 0)) return "";
  const headerList = headers ?? Object.keys(rows[0] ?? {});
  const headerRow = headerList.map((header) => escapeCsv(header)).join(",");
  const dataRows = rows.map((row) =>
    headerList.map((header) => escapeCsv(row[header])).join(",")
  );
  return [headerRow, ...dataRows].join("\n");
};

const downloadFile = (filename: string, content: string, mime: string) => {
  if (typeof window === "undefined") return;
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const escapePdfText = (text: string) =>
  text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

export const buildSimplePdf = (title: string, lines: string[]) => {
  const safeTitle = escapePdfText(title);
  let y = 760;
  const contentLines: string[] = [];
  contentLines.push(`BT /F1 16 Tf 50 ${y} Td (${safeTitle}) Tj ET`);
  y -= 26;
  lines.forEach((line) => {
    const safeLine = escapePdfText(line);
    contentLines.push(`BT /F1 10 Tf 50 ${y} Td (${safeLine}) Tj ET`);
    y -= 14;
  });
  const content = `${contentLines.join("\n")}\n`;

  const objects = [
    `1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj`,
    `2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj`,
    `3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >> >> endobj`,
    `4 0 obj << /Length ${content.length} >> stream\n${content}endstream endobj`,
    `5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [0];
  objects.forEach((obj) => {
    offsets.push(pdf.length);
    pdf += `${obj}\n`;
  });
  const xrefPos = pdf.length;
  pdf += "xref\n0 6\n0000000000 65535 f \n";
  for (let i = 1; i <= 5; i += 1) {
    const offset = offsets[i].toString().padStart(10, "0");
    pdf += `${offset} 00000 n \n`;
  }
  pdf += `trailer << /Size 6 /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`;
  return pdf;
};

export const downloadCsv = (
  filename: string,
  rows: CsvRow[],
  headers?: string[]
) => {
  const csv = buildCsv(rows, headers);
  downloadFile(filename, csv, "text/csv;charset=utf-8");
};

export const downloadTemplateCsv = (filename: string, headers: string[]) => {
  const csv = buildCsv([], headers);
  downloadFile(filename, csv, "text/csv;charset=utf-8");
};

export const downloadPdf = (filename: string, title: string, lines: string[]) => {
  const pdf = buildSimplePdf(title, lines);
  downloadFile(filename, pdf, "application/pdf");
};
