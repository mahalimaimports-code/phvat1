"use client";

import { useState } from "react";
import { downloadCsv, downloadPdf } from "@/lib/exporters";

export default function SalesSummaryPage() {
  const [filters, setFilters] = useState({
    period: "Monthly",
    start: "Feb 1, 2026",
    end: "Feb 28, 2026",
    customer: "Customer",
  });
  const [ran, setRan] = useState(false);

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Sales summary</h2>
        <p className="text-sm text-slate-600">Review sales totals by period.</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <select
            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm"
            value={filters.period}
            onChange={(event) => setFilters((prev) => ({ ...prev, period: event.target.value }))}
          >
            <option>Weekly</option>
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
            <option>Bituin Co. Ltd.</option>
          </select>
          <button
            type="button"
            onClick={() => setRan(true)}
            className="h-10 rounded-xl bg-[#1a73e8] px-4 text-sm font-semibold text-white"
          >
            Run
          </button>
        </div>
        {ran ? (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() =>
                downloadCsv("sales-summary.csv", [
                  { metric: "Total sales", amount: 128450 },
                  { metric: "VATable", amount: 68450 },
                  { metric: "Zero-rated", amount: 42000 },
                  { metric: "Exempt", amount: 18000 },
                ])
              }
              className="h-9 rounded-xl border border-slate-200 px-3 text-xs font-semibold text-slate-600"
            >
              Export CSV
            </button>
            <button
              type="button"
              onClick={() =>
                downloadPdf("sales-summary.pdf", "Sales Summary", [
                  `Period: ${filters.start} - ${filters.end}`,
                  "Total sales: PHP 128,450.00",
                  "VATable: PHP 68,450.00",
                  "Zero-rated: PHP 42,000.00",
                  "Exempt: PHP 18,000.00",
                ])
              }
              className="h-9 rounded-xl border border-slate-200 px-3 text-xs font-semibold text-slate-600"
            >
              Export PDF
            </button>
          </div>
        ) : null}
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          Export options: CSV, PDF, or accountant-ready summary.
        </div>
        <div className="mt-6 h-48 rounded-xl border border-dashed border-slate-200 bg-slate-50" />
        <p className="mt-3 text-xs text-slate-500">Placeholder for sales report chart/table.</p>
      </section>
    </div>
  );
}
