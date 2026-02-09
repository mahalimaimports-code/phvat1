"use client";

import { useState } from "react";
import EmptyState from "@/components/ui/empty-state";
import Skeleton from "@/components/ui/skeleton";
import { documents } from "@/data/demo";
import FileImportButton from "@/components/ui/file-import-button";
import { downloadCsv, downloadPdf, downloadTemplateCsv } from "@/lib/exporters";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(value);

const statusStyles: Record<string, string> = {
  Paid: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Pending: "bg-amber-50 text-amber-700 border-amber-200",
  Overdue: "bg-rose-50 text-rose-700 border-rose-200",
};

export default function DocumentsPage() {
  const isLoading = false;
  const [lastImport, setLastImport] = useState<string | null>(null);

  const handleExportPdf = () => {
    const lines = documents.map(
      (doc) =>
        `${doc.id} | ${doc.type} | ${doc.customer} | PHP ${doc.amount.toFixed(2)} | ${doc.status}`
    );
    downloadPdf("documents.pdf", "Documents Export", lines);
  };

  const handleExportCsv = () => {
    downloadCsv(
      "documents.csv",
      documents.map((doc) => ({
        id: doc.id,
        type: doc.type,
        customer: doc.customer,
        amount: doc.amount,
        status: doc.status,
        issuedAt: doc.issuedAt,
        vatType: doc.vatType,
      })),
      ["id", "type", "customer", "amount", "status", "issuedAt", "vatType"]
    );
  };

  const handleDownloadTemplate = () => {
    downloadTemplateCsv("documents-template.csv", [
      "id",
      "type",
      "customer",
      "amount",
      "status",
      "issuedAt",
      "vatType",
    ]);
  };

  return (
    <div className="space-y-6">
      <section className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Documents</h2>
          <p className="text-sm text-slate-600">
            Manage invoices, official receipts, and credit notes.
          </p>
        </div>
        <a
          href="/documents/new"
          className="rounded-xl bg-[#1a73e8] px-4 py-2 text-sm font-semibold text-white"
        >
          Create document
        </a>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <input
              className="h-10 w-full max-w-xs rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700"
              placeholder="Search by ID or customer"
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
              <option>Document type</option>
              <option>Invoice</option>
              <option>Official Receipt</option>
              <option>Credit Note</option>
            </select>
            <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>Status</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Overdue</option>
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
          Attachments are stored with each document for audit support.
        </div>

        <div className="mt-6 space-y-3">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-16" />
            ))
          ) : documents.length === 0 ? (
            <EmptyState
              title="No documents yet"
              description="Issue your first invoice or official receipt from a transaction."
              action={{ label: "Create document", href: "/documents/new" }}
            />
          ) : (
            documents.map((doc) => (
              <div
                key={doc.id}
                className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">{doc.id}</p>
                  <p className="text-xs text-slate-500">{doc.type}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{doc.customer}</p>
                  <span
                    className={`mt-2 inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusStyles[doc.status] ?? "border-slate-200 text-slate-500"}`}
                  >
                    {doc.status}
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-900">{formatCurrency(doc.amount)}</p>
                <div className="text-xs text-slate-500">Attachments: 1</div>
                <a href={`/documents/${doc.id}`} className="text-xs font-semibold text-[#1a73e8]">
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
