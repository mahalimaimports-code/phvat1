"use client";

import { useState } from "react";

const reports = [
  { title: "Sales summary", desc: "Daily and monthly sales totals", href: "/reports/sales" },
  { title: "VAT summary", desc: "VATable, zero-rated, and exempt breakdowns", href: "/reports/vat" },
  { title: "Customer statements", desc: "Generate statement of account per customer", href: "/reports/customer-statement" },
];

export default function ReportsPage() {
  const [filters, setFilters] = useState({
    period: "Weekly",
    start: "Feb 1, 2026",
    end: "Feb 28, 2026",
    customer: "Customer",
    taxType: "Tax type",
  });
  const [applied, setApplied] = useState(false);

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Reports</h2>
        <p className="text-sm text-slate-600">Export reports for accounting and compliance.</p>
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
            onClick={() => setApplied(true)}
            className="h-10 rounded-xl bg-[#1a73e8] px-4 text-sm font-semibold text-white"
          >
            Apply
          </button>
        </div>
        {applied ? (
          <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs text-emerald-700">
            Filters applied: {filters.period} · {filters.start} - {filters.end}
          </div>
        ) : null}
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {reports.map((report) => (
          <a
            key={report.title}
            href={report.href}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#1a73e8]/50 hover:shadow-md"
          >
            <h3 className="text-sm font-semibold text-slate-900">{report.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{report.desc}</p>
            <div className="mt-6 text-xs font-semibold text-[#1a73e8]">
              Open report →
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}
