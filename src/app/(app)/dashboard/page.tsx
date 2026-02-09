"use client";

import { useMemo, useState } from "react";
import StatCard from "@/components/ui/stat-card";
import Skeleton from "@/components/ui/skeleton";
import { dashboardStats, recentActivity } from "@/data/demo";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(value);

const kpiOptions = [
  "Total sales (MTD)",
  "VAT payable",
  "Outstanding balance",
  "Documents issued",
  "Average invoice value",
  "Collections (MTD)",
];

const widgetOptions = [
  "Sales trend",
  "VAT breakdown",
  "Collections overview",
  "Top customers",
  "Overdue summary",
];

export default function DashboardPage() {
  const isLoading = false;

  const [filters, setFilters] = useState({
    dateRange: "Last 30 days",
    customer: "All customers",
    transactionType: "All types",
  });

  const [selectedKpis, setSelectedKpis] = useState<string[]>([
    "Total sales (MTD)",
    "VAT payable",
    "Outstanding balance",
    "Documents issued",
  ]);

  const [selectedWidgets, setSelectedWidgets] = useState<string[]>([
    "Sales trend",
    "VAT breakdown",
    "Collections overview",
  ]);

  const filteredStats = useMemo(
    () => dashboardStats.filter((stat) => selectedKpis.includes(stat.label)),
    [selectedKpis]
  );

  const toggleKpi = (label: string) => {
    setSelectedKpis((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  const toggleWidget = (label: string) => {
    setSelectedWidgets((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  return (
    <div className="space-y-8">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Dashboard</h2>
          <p className="text-sm text-slate-600">
            Consolidated overview of sales, VAT, customers, and collections.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <select
            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm"
            value={filters.dateRange}
            onChange={(event) => setFilters((prev) => ({ ...prev, dateRange: event.target.value }))}
          >
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Quarter to date</option>
            <option>Year to date</option>
            <option>Custom range</option>
          </select>
          <select
            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm"
            value={filters.customer}
            onChange={(event) => setFilters((prev) => ({ ...prev, customer: event.target.value }))}
          >
            <option>All customers</option>
            <option>Luna Retail Ventures</option>
            <option>SariHub Online Store</option>
            <option>Bituin Co. Ltd.</option>
          </select>
          <select
            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm"
            value={filters.transactionType}
            onChange={(event) => setFilters((prev) => ({ ...prev, transactionType: event.target.value }))}
          >
            <option>All types</option>
            <option>Invoices</option>
            <option>Official Receipts</option>
            <option>Credit Notes</option>
          </select>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-900">Key KPIs</h3>
            <span className="text-xs text-slate-500">Select up to 6</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {kpiOptions.map((kpi) => (
              <button
                key={kpi}
                type="button"
                onClick={() => toggleKpi(kpi)}
                className={
                  "rounded-full border px-3 py-1 text-xs font-semibold transition " +
                  (selectedKpis.includes(kpi)
                    ? "border-transparent bg-[#1a73e8]/10 text-[#1a73e8]"
                    : "border-slate-200 bg-white text-slate-600")
                }
              >
                {kpi}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Widgets</h3>
          <p className="mt-2 text-xs text-slate-500">Choose which widgets appear below.</p>
          <div className="mt-4 space-y-2 text-xs text-slate-600">
            {widgetOptions.map((widget) => (
              <label key={widget} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedWidgets.includes(widget)}
                  onChange={() => toggleWidget(widget)}
                  className="h-4 w-4 accent-[#1a73e8]"
                />
                {widget}
              </label>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-28" />
            ))
          : filteredStats.map((stat) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.label === "Documents issued" ? String(stat.value) : formatCurrency(stat.value)}
                note={stat.note}
              />
            ))}
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
        {selectedWidgets.includes("Sales trend") && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Sales trend</h3>
              <a
                href="/reports/sales"
                className="text-xs font-semibold text-[#1a73e8]"
              >
                View report
              </a>
            </div>
            {isLoading ? (
              <Skeleton className="mt-6 h-52" />
            ) : (
              <>
                <div className="mt-6 h-52 rounded-xl border border-dashed border-slate-200 bg-slate-50" />
                <p className="mt-3 text-xs text-slate-500">Placeholder for chart.</p>
              </>
            )}
          </div>
        )}
        {selectedWidgets.includes("VAT breakdown") && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">VAT breakdown</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>VATable (12%)</span>
                <span>{formatCurrency(68450)}</span>
              </div>
              <div className="flex justify-between">
                <span>Zero-rated (0%)</span>
                <span>{formatCurrency(42000)}</span>
              </div>
              <div className="flex justify-between">
                <span>VAT-exempt</span>
                <span>{formatCurrency(18000)}</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {selectedWidgets.includes("Collections overview") && (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Collections overview</h3>
            <a
              href="/reports/customer-statement"
              className="text-xs font-semibold text-[#1a73e8]"
            >
              View aging
            </a>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { label: "Current", value: 15400 },
              { label: "31-60 days", value: 8200 },
              { label: "60+ days", value: 8500 },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{formatCurrency(item.value)}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Recent activity</h3>
          <a
            href="/transactions"
            className="text-xs font-semibold text-[#1a73e8]"
          >
            See all
          </a>
        </div>
        <div className="mt-4 space-y-3">
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className="h-16" />
              ))
            : recentActivity.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.id}</p>
                    <p className="text-xs text-slate-500">{item.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-900">{formatCurrency(item.amount)}</p>
                    <p className="text-xs text-slate-500">{item.status}</p>
                  </div>
                </div>
              ))}
        </div>
      </section>
    </div>
  );
}
