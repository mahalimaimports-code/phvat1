const reports = [
  { title: "Sales summary", desc: "Daily and monthly sales totals", href: "/reports/sales" },
  { title: "VAT summary", desc: "VATable, zero-rated, and exempt breakdowns", href: "/reports/vat" },
  { title: "Customer statements", desc: "Generate statement of account per customer", href: "/reports/customer-statement" },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Reports</h2>
        <p className="text-sm text-slate-600">Export reports for accounting and compliance.</p>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {reports.map((report) => (
          <a
            key={report.title}
            href={report.href}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#1a73e8]/50"
          >
            <h3 className="text-sm font-semibold text-slate-900">{report.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{report.desc}</p>
          </a>
        ))}
      </section>
    </div>
  );
}
