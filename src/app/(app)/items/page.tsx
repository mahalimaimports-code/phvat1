"use client";

import { useState } from "react";
import EmptyState from "@/components/ui/empty-state";
import Skeleton from "@/components/ui/skeleton";
import { items } from "@/data/demo";
import FileImportButton from "@/components/ui/file-import-button";
import { downloadCsv, downloadPdf, downloadTemplateCsv } from "@/lib/exporters";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(value);

const vatStyles: Record<string, string> = {
  Standard: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Zero-rated": "bg-amber-50 text-amber-700 border-amber-200",
  Exempt: "bg-slate-100 text-slate-600 border-slate-200",
};

export default function ItemsPage() {
  const isLoading = false;
  const [lastImport, setLastImport] = useState<string | null>(null);

  const handleExportPdf = () => {
    const lines = items.map(
      (item) =>
        `${item.id} | ${item.name} | ${item.sku} | PHP ${item.price.toFixed(2)} | ${item.vatType}`
    );
    downloadPdf("items.pdf", "Items Export", lines);
  };

  const handleExportCsv = () => {
    downloadCsv(
      "items.csv",
      items.map((item) => ({
        id: item.id,
        name: item.name,
        sku: item.sku,
        price: item.price,
        vatType: item.vatType,
      })),
      ["id", "name", "sku", "price", "vatType"]
    );
  };

  const handleDownloadTemplate = () => {
    downloadTemplateCsv("items-template.csv", ["id", "name", "sku", "price", "vatType"]);
  };

  return (
    <div className="space-y-6">
      <section className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Items</h2>
          <p className="text-sm text-slate-600">Maintain your product and service catalog.</p>
        </div>
        <a href="/items/new" className="rounded-xl bg-[#1a73e8] px-4 py-2 text-sm font-semibold text-white">
          New item
        </a>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <input
              className="h-10 w-full max-w-xs rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700"
              placeholder="Search items"
            />
            <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>VAT type</option>
              <option>Standard</option>
              <option>Zero-rated</option>
              <option>Exempt</option>
            </select>
            <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>Sort by</option>
              <option>Name (A-Z)</option>
              <option>Name (Z-A)</option>
              <option>Price (high to low)</option>
              <option>Price (low to high)</option>
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
          Attachments can be stored per item (e.g., datasheets, photos).
        </div>

        <div className="mt-6 space-y-3">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-16" />
            ))
          ) : items.length === 0 ? (
            <EmptyState
              title="No items yet"
              description="Create an item catalog to speed up transaction entry."
              action={{ label: "New item", href: "/items/new" }}
            />
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                    <span>{item.id}</span>
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${vatStyles[item.vatType] ?? "border-slate-200 text-slate-500"}`}
                    >
                      {item.vatType}
                    </span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-slate-900">{formatCurrency(item.price)}</p>
                <div className="text-xs text-slate-500">Attachments: 1</div>
                <a href={`/items/${item.id}`} className="text-xs font-semibold text-[#1a73e8]">View</a>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
