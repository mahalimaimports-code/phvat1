"use client";

import { useState } from "react";
import EmptyState from "@/components/ui/empty-state";
import Skeleton from "@/components/ui/skeleton";
import { payments } from "@/data/demo";
import FileImportButton from "@/components/ui/file-import-button";
import Modal from "@/components/ui/modal";
import { downloadCsv, downloadTemplateCsv } from "@/lib/exporters";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(value);

const methodStyles: Record<string, string> = {
  "Bank Transfer": "bg-blue-50 text-blue-700 border-blue-200",
  Cash: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "E-Wallet": "bg-amber-50 text-amber-700 border-amber-200",
};

export default function PaymentsPage() {
  const isLoading = false;
  const [lastImport, setLastImport] = useState<string | null>(null);
  const [linkModalOpen, setLinkModalOpen] = useState(false);
  const [linkedProvider, setLinkedProvider] = useState("PayMongo");
  const [provider, setProvider] = useState("PayMongo");
  const [accountId, setAccountId] = useState("BPI-4021");

  const handleExportCsv = () => {
    downloadCsv(
      "payments.csv",
      payments.map((pay) => ({
        id: pay.id,
        document: pay.doc,
        amount: pay.amount,
        method: pay.method,
        date: pay.date,
        reference: pay.reference,
      })),
      ["id", "document", "amount", "method", "date", "reference"]
    );
  };

  const handleDownloadTemplate = () => {
    downloadTemplateCsv("payments-template.csv", [
      "id",
      "document",
      "amount",
      "method",
      "date",
      "reference",
    ]);
  };

  return (
    <div className="space-y-6">
      <section className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Payments</h2>
          <p className="text-sm text-slate-600">Track payments and partial settlements.</p>
        </div>
        <a href="/payments/new" className="rounded-xl bg-[#1a73e8] px-4 py-2 text-sm font-semibold text-white">
          Record payment
        </a>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <input
              className="h-10 w-full max-w-xs rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700"
              placeholder="Search by document"
            />
            <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>Date range</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Quarter to date</option>
              <option>Custom range</option>
            </select>
            <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>Customer</option>
              <option>Luna Retail Ventures</option>
              <option>SariHub Online Store</option>
              <option>Bituin Co. Ltd.</option>
            </select>
            <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>VAT type</option>
              <option>Standard</option>
              <option>Zero-rated</option>
              <option>Exempt</option>
            </select>
            <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>Payment method</option>
              <option>Cash</option>
              <option>Bank Transfer</option>
              <option>E-Wallet</option>
            </select>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setLinkModalOpen(true)}
              className="h-10 rounded-xl border border-slate-200 px-3 text-sm font-semibold text-slate-600"
            >
              Link bank / POS
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

        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-600">
          Linked provider: {linkedProvider}
        </div>
        {lastImport ? (
          <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs text-emerald-700">
            Imported file: {lastImport}
          </div>
        ) : null}

        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          Linked banks or POS systems can auto-sync payments monthly.
        </div>

        <div className="mt-6 space-y-3">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-16" />
            ))
          ) : payments.length === 0 ? (
            <EmptyState
              title="No payments recorded"
              description="Record payments to update balances and receipts."
              action={{ label: "Record payment", href: "/payments/new" }}
            />
          ) : (
            payments.map((pay) => (
              <div key={pay.id} className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{pay.id}</p>
                  <p className="text-xs text-slate-500">{pay.doc}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{formatCurrency(pay.amount)}</p>
                  <span
                    className={`mt-2 inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${methodStyles[pay.method] ?? "border-slate-200 text-slate-500"}`}
                  >
                    {pay.method}
                  </span>
                </div>
                <p className="text-xs text-slate-500">{pay.date}</p>
                <a href={`/payments/${pay.id}`} className="text-xs font-semibold text-[#1a73e8]">View</a>
              </div>
            ))
          )}
        </div>
      </section>

      <Modal
        isOpen={linkModalOpen}
        title="Link bank or POS"
        description="Connect a provider to sync payments automatically."
        onClose={() => setLinkModalOpen(false)}
        footer={
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setLinkModalOpen(false)}
              className="h-10 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                setLinkedProvider(`${provider} · ${accountId}`);
                setLinkModalOpen(false);
              }}
              className="h-10 rounded-xl bg-[#1a73e8] px-4 text-sm font-semibold text-white"
            >
              Save link
            </button>
          </div>
        }
      >
        <div className="space-y-3 text-sm text-slate-600">
          <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
            Provider
          </label>
          <select
            value={provider}
            onChange={(event) => setProvider(event.target.value)}
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3"
          >
            <option>PayMongo</option>
            <option>Maya Business</option>
            <option>BPI POS</option>
          </select>
          <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
            Account ID
          </label>
          <input
            value={accountId}
            onChange={(event) => setAccountId(event.target.value)}
            className="h-11 w-full rounded-xl border border-slate-200 px-3"
          />
        </div>
      </Modal>
    </div>
  );
}
