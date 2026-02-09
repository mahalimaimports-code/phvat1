"use client";

import { useState } from "react";
import { items } from "@/data/demo";
import Modal from "@/components/ui/modal";

const item = items[0];
const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(value);

export default function ItemDetailPage() {
  const [currentItem, setCurrentItem] = useState(items[0]);
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(currentItem);

  const openEdit = () => {
    setDraft(currentItem);
    setIsEditing(true);
  };

  const saveEdit = () => {
    setCurrentItem(draft);
    setIsEditing(false);
  };
  return (
    <div className="space-y-6">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">{currentItem.name}</h2>
          <p className="text-sm text-slate-600">SKU: {currentItem.sku} · VAT: {currentItem.vatType}</p>
        </div>
        <button
          type="button"
          onClick={openEdit}
          className="rounded-xl bg-[#1a73e8] px-4 py-2 text-sm font-semibold text-white"
        >
          Edit item
        </button>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900">Pricing</h3>
        <p className="mt-2 text-sm text-slate-600">Unit price: {formatCurrency(currentItem.price)}</p>
      </section>

      <Modal
        isOpen={isEditing}
        title="Edit item"
        description="Update item details and VAT classification."
        onClose={() => setIsEditing(false)}
        footer={
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="h-10 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={saveEdit}
              className="h-10 rounded-xl bg-[#1a73e8] px-4 text-sm font-semibold text-white"
            >
              Save changes
            </button>
          </div>
        }
      >
        <div className="grid grid-cols-1 gap-4 text-sm text-slate-600 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Item name
            </label>
            <input
              value={draft.name}
              onChange={(event) => setDraft({ ...draft, name: event.target.value })}
              className="h-11 w-full rounded-xl border border-slate-200 px-3"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              SKU
            </label>
            <input
              value={draft.sku}
              onChange={(event) => setDraft({ ...draft, sku: event.target.value })}
              className="h-11 w-full rounded-xl border border-slate-200 px-3"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Unit price
            </label>
            <input
              type="number"
              value={draft.price}
              onChange={(event) =>
                setDraft({ ...draft, price: Number(event.target.value) })
              }
              className="h-11 w-full rounded-xl border border-slate-200 px-3"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              VAT type
            </label>
            <select
              value={draft.vatType}
              onChange={(event) => setDraft({ ...draft, vatType: event.target.value })}
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3"
            >
              <option>Standard</option>
              <option>Zero-rated</option>
              <option>Exempt</option>
            </select>
          </div>
        </div>
      </Modal>
    </div>
  );
}
