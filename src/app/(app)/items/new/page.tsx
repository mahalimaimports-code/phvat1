"use client";

import { useState } from "react";

export default function NewItemPage() {
  const [form, setForm] = useState({
    name: "Social Media Ads",
    sku: "SMA-001",
    price: "₱4,000.00",
    vatType: "Standard",
  });
  const [saved, setSaved] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Create item</h2>
        <p className="text-sm text-slate-600">Add a product or service to your catalog.</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {saved ? (
          <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs text-emerald-700">
            {saved}
          </div>
        ) : null}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Item name</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">SKU</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={form.sku}
              onChange={(event) => setForm((prev) => ({ ...prev, sku: event.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Unit price</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={form.price}
              onChange={(event) => setForm((prev) => ({ ...prev, price: event.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">VAT type</label>
            <select
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm"
              value={form.vatType}
              onChange={(event) => setForm((prev) => ({ ...prev, vatType: event.target.value }))}
            >
              <option>Standard</option>
              <option>Zero-rated</option>
              <option>Exempt</option>
            </select>
            <p className="text-xs text-slate-500">
              VAT type controls line-item VAT behavior on documents.
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              setForm({
                name: "Social Media Ads",
                sku: "SMA-001",
                price: "₱4,000.00",
                vatType: "Standard",
              });
              setSaved("Changes discarded.");
            }}
            className="text-sm font-semibold text-slate-500"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => setSaved(`Saved item: ${form.name}.`)}
            className="h-11 rounded-xl bg-[#1a73e8] px-6 text-sm font-semibold text-white"
          >
            Save item
          </button>
        </div>
      </section>
    </div>
  );
}
