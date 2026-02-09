"use client";

import { useState } from "react";
import { downloadPdf } from "@/lib/exporters";

export default function CustomerStatementPage() {
  const [period, setPeriod] = useState({
    start: "Jan 1, 2026",
    end: "Feb 3, 2026",
  });
  const [generated, setGenerated] = useState(false);

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Customer statement</h2>
        <p className="text-sm text-slate-600">Generate a statement of account for Luna Retail.</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Period start</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={period.start}
              onChange={(event) => setPeriod((prev) => ({ ...prev, start: event.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Period end</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={period.end}
              onChange={(event) => setPeriod((prev) => ({ ...prev, end: event.target.value }))}
            />
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          Statements include unpaid invoices and applied payments.
        </div>
        {generated ? (
          <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs text-emerald-700">
            Statement generated for {period.start} to {period.end}.
          </div>
        ) : null}
        <button
          type="button"
          onClick={() => {
            setGenerated(true);
            downloadPdf("customer-statement.pdf", "Customer Statement", [
              `Period: ${period.start} - ${period.end}`,
              "Customer: Luna Retail Ventures",
              "Outstanding: PHP 6,200.00",
            ]);
          }}
          className="mt-6 h-11 rounded-xl bg-[#1a73e8] px-6 text-sm font-semibold text-white"
        >
          Generate statement
        </button>
      </section>
    </div>
  );
}
