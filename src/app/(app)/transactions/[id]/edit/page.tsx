"use client";

import { useMemo, useState } from "react";
import { items as catalogItems } from "@/data/demo";

type LineItem = {
  id: string;
  name: string;
  sku: string;
  price: number;
  qty: number;
};

export default function EditTransactionPage() {
  const [lineItems, setLineItems] = useState<LineItem[]>(
    catalogItems.slice(0, 2).map((item) => ({
      id: item.id,
      name: item.name,
      sku: item.sku,
      price: item.price,
      qty: 1,
    }))
  );
  const [saved, setSaved] = useState<string | null>(null);

  const addLineItem = () => {
    const next = catalogItems[lineItems.length % catalogItems.length];
    setLineItems((prev) => [
      ...prev,
      {
        id: `${next.id}-${prev.length + 1}`,
        name: next.name,
        sku: next.sku,
        price: next.price,
        qty: 1,
      },
    ]);
  };

  const updateQty = (id: string, qty: number) => {
    setLineItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: Math.max(1, qty) } : item))
    );
  };

  const removeLineItem = (id: string) => {
    setLineItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = useMemo(
    () => lineItems.reduce((sum, item) => sum + item.price * item.qty, 0),
    [lineItems]
  );

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Edit transaction</h2>
        <p className="text-sm text-slate-600">Edits are allowed only before document issuance.</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {saved ? (
          <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs text-emerald-700">
            {saved}
          </div>
        ) : null}
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700">
          Editing is locked once a document is issued. Create a credit note for adjustments.
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Customer
            </label>
            <select className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm">
              <option>Luna Retail</option>
              <option>SariHub</option>
              <option>Bituin Co.</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Transaction date
            </label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" defaultValue="Feb 3, 2026" />
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <h3 className="text-sm font-semibold text-slate-900">Line items</h3>
          {lineItems.map((item) => (
            <div key={item.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                <p className="text-xs text-slate-500">SKU: {item.sku}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateQty(item.id, item.qty - 1)}
                  className="h-8 w-8 rounded-lg border border-slate-200 bg-white text-sm font-semibold text-slate-600"
                >
                  -
                </button>
                <span className="text-sm font-semibold text-slate-900">{item.qty}</span>
                <button
                  type="button"
                  onClick={() => updateQty(item.id, item.qty + 1)}
                  className="h-8 w-8 rounded-lg border border-slate-200 bg-white text-sm font-semibold text-slate-600"
                >
                  +
                </button>
              </div>
              <p className="text-sm font-semibold text-slate-900">₱{(item.price * item.qty).toFixed(2)}</p>
              <button
                type="button"
                onClick={() => removeLineItem(item.id)}
                className="text-xs font-semibold text-rose-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addLineItem}
            className="text-xs font-semibold text-[#1a73e8]"
          >
            + Add item
          </button>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <a href="/transactions/TRX-2026-0142" className="text-sm font-semibold text-slate-500">
            Cancel
          </a>
          <button
            type="button"
            onClick={() => setSaved(`Changes saved. New total: ₱${total.toFixed(2)}`)}
            className="h-11 rounded-xl bg-[#1a73e8] px-6 text-sm font-semibold text-white"
          >
            Save changes
          </button>
        </div>
      </section>
    </div>
  );
}
