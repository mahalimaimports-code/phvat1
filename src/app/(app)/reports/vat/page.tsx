"use client";

import { useState } from "react";
import { downloadCsv, downloadPdf } from "@/lib/exporters";

export default function VatSummaryPage() {
  const [filters, setFilters] = useState({
    period: "Monthly",
    start: "Feb 1, 2026",
    end: "Feb 28, 2026",
    customer: "Customer",
    taxType: "Tax type",
  });
  const [ran, setRan] = useState(false);

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">VAT summary</h2>
        <p className="text-sm text-slate-600">Breakdown by VAT type and totals.</p>
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
          <select
            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm"
            value={filters.taxType}
            onChange={(event) => setFilters((prev) => ({ ...prev, taxType: event.target.value }))}
          >
            <option>Tax type</option>
            <option>VATable</option>
            <option>Zero-rated</option>
            <option>Exempt</option>
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
                downloadCsv("vat-summary.csv", [
                  { vatType: "VATable", amount: 12450 },
                  { vatType: "Zero-rated", amount: 8200 },
                  { vatType: "Exempt", amount: 3500 },
                ])
              }
              className="h-9 rounded-xl border border-slate-200 px-3 text-xs font-semibold text-slate-600"
            >
              Export CSV
            </button>
            <button
              type="button"
              onClick={() =>
                downloadPdf("vat-summary.pdf", "VAT Summary", [
                  `Period: ${filters.start} - ${filters.end}`,
                  "VATable: PHP 12,450.00",
                  "Zero-rated: PHP 8,200.00",
                  "Exempt: PHP 3,500.00",
                ])
              }
              className="h-9 rounded-xl border border-slate-200 px-3 text-xs font-semibold text-slate-600"
            >
              Export PDF
            </button>
          </div>
        ) : null}
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          VAT totals follow BIR definitions and match document breakdowns.
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {["VATable", "Zero-rated", "Exempt"].map((label) => (
            <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{label}</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">₱12,450.00</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
