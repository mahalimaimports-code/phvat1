"use client";

import { useMemo, useState } from "react";
import { customers, items as catalogItems } from "@/data/demo";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(value);

type VatType = "VATable (12%)" | "Zero-rated (0%)" | "VAT-exempt";

type LineItem = {
  id: string;
  name: string;
  sku: string;
  price: number;
  qty: number;
  vatType: VatType;
};

const VAT_RATE = 0.12;

export default function NewTransactionPage() {
  const [lineItems, setLineItems] = useState<LineItem[]>(
    catalogItems.slice(0, 2).map((item) => ({
      id: item.id,
      name: item.name,
      sku: item.sku,
      price: item.price,
      qty: 1,
      vatType: "VATable (12%)",
    }))
  );

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
        vatType: "VATable (12%)",
      },
    ]);
  };

  const removeLineItem = (id: string) => {
    setLineItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id: string, qty: number) => {
    setLineItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: Math.max(1, qty) } : item))
    );
  };

  const updateVatType = (id: string, vatType: VatType) => {
    setLineItems((prev) => prev.map((item) => (item.id === id ? { ...item, vatType } : item)));
  };

  const summary = useMemo(() => {
    let vatable = 0;
    let zeroRated = 0;
    let exempt = 0;

    lineItems.forEach((item) => {
      const lineTotal = item.price * item.qty;
      if (item.vatType === "VATable (12%)") vatable += lineTotal;
      if (item.vatType === "Zero-rated (0%)") zeroRated += lineTotal;
      if (item.vatType === "VAT-exempt") exempt += lineTotal;
    });

    const vatAmount = vatable * VAT_RATE;
    const total = vatable + zeroRated + exempt + vatAmount;

    return { vatable, zeroRated, exempt, vatAmount, total };
  }, [lineItems]);
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">New transaction</h2>
        <p className="text-sm text-slate-600">
          Record a sale and compute VAT automatically.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Transaction details
            </p>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
              Draft
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Customer
              </label>
              <select className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm">
                {customers.map((customer) => (
                  <option key={customer.id}>
                    {customer.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Transaction date
              </label>
              <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" placeholder="Feb 3, 2026" />
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">Line items</h3>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600">
              VAT classification follows the item VAT type and business VAT status.
            </div>
            {lineItems.map((line) => (
              <div key={line.id} className="grid grid-cols-1 gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 sm:grid-cols-6">
                <div className="sm:col-span-2">
                  <p className="text-sm font-semibold text-slate-900">{line.name}</p>
                  <p className="text-xs text-slate-500">SKU: {line.sku}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="h-8 w-8 rounded-lg border border-slate-200 bg-white text-sm font-semibold text-slate-600"
                    onClick={() => updateQty(line.id, line.qty - 1)}
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold text-slate-900">{line.qty}</span>
                  <button
                    type="button"
                    className="h-8 w-8 rounded-lg border border-slate-200 bg-white text-sm font-semibold text-slate-600"
                    onClick={() => updateQty(line.id, line.qty + 1)}
                  >
                    +
                  </button>
                </div>
                <p className="text-sm text-slate-900">{formatCurrency(line.price)}</p>
                <div className="text-sm">
                  <select
                    className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2 text-xs"
                    value={line.vatType}
                    onChange={(event) => updateVatType(line.id, event.target.value as VatType)}
                  >
                    <option value="VATable (12%)">VATable (12%)</option>
                    <option value="Zero-rated (0%)">Zero-rated (0%)</option>
                    <option value="VAT-exempt">VAT-exempt</option>
                  </select>
                </div>
                <div className="flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => removeLineItem(line.id)}
                    className="text-xs font-semibold text-rose-600"
                  >
                    Remove
                  </button>
                </div>
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
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Summary</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>VATable sales (12%)</span>
              <span>{formatCurrency(summary.vatable)}</span>
            </div>
            <div className="flex justify-between">
              <span>VAT amount</span>
              <span>{formatCurrency(summary.vatAmount)}</span>
            </div>
            <div className="flex justify-between">
              <span>Zero-rated sales (0%)</span>
              <span>{formatCurrency(summary.zeroRated)}</span>
            </div>
            <div className="flex justify-between">
              <span>VAT-exempt sales</span>
              <span>{formatCurrency(summary.exempt)}</span>
            </div>
            <div className="flex justify-between">
              <span>Withholding</span>
              <span>₱0.00</span>
            </div>
            <div className="flex justify-between font-semibold text-slate-900">
              <span>Total</span>
              <span>{formatCurrency(summary.total)}</span>
            </div>
          </div>
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
            Withholding reduces net receivable but does not change VAT basis.
          </div>
          <button className="mt-6 h-11 w-full rounded-xl bg-[#1a73e8] text-sm font-semibold text-white">
            Save transaction
          </button>
          <button className="mt-3 h-11 w-full rounded-xl border border-slate-200 text-sm font-semibold text-slate-600">
            Save as draft
          </button>
        </div>
      </section>
    </div>
  );
}
