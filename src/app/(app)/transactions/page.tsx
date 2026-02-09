"use client";

import { useState } from "react";
import EmptyState from "@/components/ui/empty-state";
import Skeleton from "@/components/ui/skeleton";
import { transactions } from "@/data/demo";
import FileImportButton from "@/components/ui/file-import-button";
import { downloadCsv, downloadPdf, downloadTemplateCsv } from "@/lib/exporters";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(value);

const statusStyles: Record<string, string> = {
  Issued: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Draft: "bg-amber-50 text-amber-700 border-amber-200",
};

export default function TransactionsPage() {
  const isLoading = false;
  const [lastImport, setLastImport] = useState<string | null>(null);

  const handleExportPdf = () => {
    const lines = transactions.map(
      (row) =>
        `${row.id} | ${row.date} | ${row.customer} | PHP ${row.amount.toFixed(2)} | ${row.vatType} | ${row.status}`
    );
    downloadPdf("transactions.pdf", "Transactions Export", lines);
  };

  const handleExportCsv = () => {
    downloadCsv(
      "transactions.csv",
      transactions.map((row) => ({
        id: row.id,
        date: row.date,
        customer: row.customer,
        amount: row.amount,
        vatType: row.vatType,
        status: row.status,
      })),
      ["id", "date", "customer", "amount", "vatType", "status"]
    );
  };

  const handleDownloadTemplate = () => {
    downloadTemplateCsv("transactions-template.csv", [
      "id",
      "date",
      "customer",
      "amount",
      "vatType",
      "status",
    ]);
  };

  return (
    <div className="space-y-6">
      <section className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Transactions</h2>
          <p className="text-sm text-slate-600">
            Record sales and track VAT details with audit-safe history.
          </p>
        </div>
        <a
          href="/transactions/new"
          className="rounded-xl bg-[#1a73e8] px-4 py-2 text-sm font-semibold text-white"
        >
          New transaction
        </a>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <input
              className="h-10 w-full max-w-xs rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700"
              placeholder="Search by customer or ID"
            />
            <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>Date range</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Quarter to date</option>
              <option>Custom range</option>
            </select>
            <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>Contact</option>
              <option>Luna Retail Ventures</option>
              <option>SariHub Online Store</option>
              <option>Bituin Co. Ltd.</option>
            </select>
            <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>Transaction type</option>
              <option>Invoice</option>
              <option>Official Receipt</option>
              <option>Credit Note</option>
            </select>
            <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>VAT type</option>
              <option>Standard</option>
              <option>Zero-rated</option>
              <option>Exempt</option>
            </select>
            <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>Status</option>
              <option>Issued</option>
              <option>Draft</option>
            </select>
            <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>Sort by</option>
              <option>Date (newest)</option>
              <option>Date (oldest)</option>
              <option>Amount (high to low)</option>
              <option>Amount (low to high)</option>
            </select>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleExportPdf}
              className="h-10 rounded-xl border border-slate-200 px-3 text-sm font-semibold text-slate-600"
            >
              Export PDF
            </button>
            <button
              type="button"
              onClick={handleExportCsv}
              className="h-10 rounded-xl border border-slate-200 px-3 text-sm font-semibold text-slate-600"
            >
              Export CSV
            </button>
            <FileImportButton
              label="Import Excel"
              accept=".csv,.xlsx"
              className="h-10 rounded-xl border border-slate-200 px-3 text-sm font-semibold text-slate-600"
              onImported={(file) => setLastImport(file.name)}
            />
            <button
              type="button"
              onClick={handleDownloadTemplate}
              className="h-10 rounded-xl border border-slate-200 px-3 text-sm font-semibold text-slate-600"
            >
              Download Template
            </button>
          </div>
        </div>

        {lastImport ? (
          <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs text-emerald-700">
            Imported file: {lastImport}
          </div>
        ) : null}

        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          Attachments are stored with each transaction for audit support.
        </div>

        <div className="mt-6 space-y-3">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-16" />
            ))
          ) : transactions.length === 0 ? (
            <EmptyState
              title="No transactions yet"
              description="Create your first transaction to start tracking VAT and invoices."
              action={{ label: "New transaction", href: "/transactions/new" }}
            />
          ) : (
            transactions.map((row) => (
              <div
                key={row.id}
                className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">{row.id}</p>
                  <p className="text-xs text-slate-500">{row.date}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{row.customer}</p>
                  <p className="text-xs text-slate-500">VAT: {row.vatType}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-900">{formatCurrency(row.amount)}</p>
                  <span
                    className={`mt-2 inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusStyles[row.status] ?? "border-slate-200 text-slate-500"}`}
                  >
                    {row.status}
                  </span>
                </div>
                <div className="text-xs text-slate-500">Attachments: 2</div>
                <a href={`/transactions/${row.id}`} className="text-xs font-semibold text-[#1a73e8]">
                  View
                </a>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
