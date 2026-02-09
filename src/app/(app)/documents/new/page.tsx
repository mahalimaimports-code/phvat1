"use client";

import { useState } from "react";
import { documents, transactions } from "@/data/demo";
import { downloadPdf } from "@/lib/exporters";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(value);

export default function CreateDocumentPage() {
  const [docType, setDocType] = useState("Invoice");
  const [trxId, setTrxId] = useState(transactions[0]?.id ?? "TRX-2026-0142");
  const [issued, setIssued] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Create document</h2>
        <p className="text-sm text-slate-600">
          Issue invoices or official receipts from a recorded transaction.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Issue document
            </p>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
              Draft
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Document type
              </label>
              <select
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm"
                value={docType}
                onChange={(event) => setDocType(event.target.value)}
              >
                <option>Invoice</option>
                <option>Official Receipt</option>
                <option>Credit Note</option>
                <option>Quotation</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Transaction
              </label>
              <select
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm"
                value={trxId}
                onChange={(event) => setTrxId(event.target.value)}
              >
                {transactions.map((trx) => (
                  <option key={trx.id}>
                    {trx.id} · {trx.customer}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Preview summary</p>
            <div className="mt-3 text-xs text-slate-600">
              VATable sales: {formatCurrency(4500)} · VAT: {formatCurrency(540)} · Total: {formatCurrency(5040)}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Issuance</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Series</span>
              <span>{documents[0].series}</span>
            </div>
            <div className="flex justify-between">
              <span>Next number</span>
              <span>{documents[0].number + 1}</span>
            </div>
          </div>
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
            Issuance is final. Voids and credit notes preserve audit history.
          </div>
          {issued ? (
            <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs text-emerald-700">
              {issued}
            </div>
          ) : null}
          <button
            type="button"
            onClick={() => {
              setIssued(`Issued ${docType} for ${trxId}.`);
              downloadPdf("issued-document.pdf", `${docType} ${trxId}`, [
                `Document type: ${docType}`,
                `Transaction: ${trxId}`,
                `Series: ${documents[0].series}`,
                `Number: ${documents[0].number + 1}`,
              ]);
            }}
            className="mt-6 h-11 w-full rounded-xl bg-[#1a73e8] text-sm font-semibold text-white"
          >
            Issue document
          </button>
        </div>
      </section>
    </div>
  );
}
