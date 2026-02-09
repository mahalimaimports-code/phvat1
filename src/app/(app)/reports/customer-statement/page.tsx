"use client";

import { useState } from "react";
import { downloadPdf } from "@/lib/exporters";

export default function CustomerStatementReportPage() {
  const [filters, setFilters] = useState({
    period: "Monthly",
    start: "Jan 1, 2026",
    end: "Feb 28, 2026",
    customer: "Customer",
  });
  const [generated, setGenerated] = useState(false);

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Customer statement report</h2>
        <p className="text-sm text-slate-600">Generate statements across customers.</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <select
            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm"
            value={filters.period}
            onChange={(event) => setFilters((prev) => ({ ...prev, period: event.target.value }))}
          >
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Annually</option>
            <option>Custom range</option>
          </select>
          <input
            className="h-10 rounded-xl border border-slate-200 px-3 text-sm"
            value={filters.start}
            onChange={(event) => setFilters((prev) => ({ ...prev, start: event.target.value }))}
          />
          <input
            className="h-10 rounded-xl border border-slate-200 px-3 text-sm"
            value={filters.end}
            onChange={(event) => setFilters((prev) => ({ ...prev, end: event.target.value }))}
          />
          <select
            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm"
            value={filters.customer}
            onChange={(event) => setFilters((prev) => ({ ...prev, customer: event.target.value }))}
          >
            <option>Customer</option>
            <option>Luna Retail Ventures</option>
            <option>SariHub Online Store</option>
          </select>
          <button
            type="button"
            onClick={() => {
              setGenerated(true);
              downloadPdf("customer-statements.pdf", "Customer Statements", [
                `Period: ${filters.start} - ${filters.end}`,
                "Generated statements: Luna Retail Ventures, SariHub Online Store",
              ]);
            }}
            className="h-10 rounded-xl bg-[#1a73e8] px-4 text-sm font-semibold text-white"
          >
            Generate
          </button>
        </div>
        {generated ? (
          <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs text-emerald-700">
            Statements generated and exported.
          </div>
        ) : null}
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          Statements include unpaid invoices, credits, and recorded payments.
        </div>
      </section>
    </div>
  );
}
