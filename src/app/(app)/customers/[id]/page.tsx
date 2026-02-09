"use client";

import { useState } from "react";
import { customers, documents } from "@/data/demo";
import Modal from "@/components/ui/modal";

const customer = customers[0];
const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(value);

export default function CustomerDetailPage() {
  const [currentCustomer, setCurrentCustomer] = useState(customers[0]);
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(currentCustomer);

  const openEdit = () => {
    setDraft(currentCustomer);
    setIsEditing(true);
  };

  const saveEdit = () => {
    setCurrentCustomer(draft);
    setIsEditing(false);
  };
  return (
    <div className="space-y-6">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">{currentCustomer.name}</h2>
          <p className="text-sm text-slate-600">
            TIN: {currentCustomer.tin ?? "N/A"} · Balance: {formatCurrency(currentCustomer.balance)}
          </p>
        </div>
        <div className="flex gap-3">
          <a href={`/customers/${currentCustomer.id}/statement`} className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
            Generate statement
          </a>
          <button
            type="button"
            onClick={openEdit}
            className="rounded-xl bg-[#1a73e8] px-4 py-2 text-sm font-semibold text-white"
          >
            Edit customer
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900">Recent documents</h3>
        <p className="mt-2 text-xs text-slate-500">
          Outstanding balance: {formatCurrency(currentCustomer.balance)}
        </p>
        <div className="mt-4 space-y-3">
          {documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <p className="text-sm font-semibold text-slate-900">{doc.id}</p>
              <p className="text-sm text-slate-600">{formatCurrency(doc.amount)}</p>
              <span className={`text-[11px] font-semibold ${doc.status === "Paid" ? "text-emerald-600" : "text-rose-600"}`}>
                {doc.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Modal
        isOpen={isEditing}
        title="Edit customer"
        description="Update customer profile and contact details."
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
              Customer name
            </label>
            <input
              value={draft.name}
              onChange={(event) => setDraft({ ...draft, name: event.target.value })}
              className="h-11 w-full rounded-xl border border-slate-200 px-3"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              TIN
            </label>
            <input
              value={draft.tin ?? ""}
              onChange={(event) => setDraft({ ...draft, tin: event.target.value })}
              className="h-11 w-full rounded-xl border border-slate-200 px-3"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Email
            </label>
            <input
              value={draft.email}
              onChange={(event) => setDraft({ ...draft, email: event.target.value })}
              className="h-11 w-full rounded-xl border border-slate-200 px-3"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Phone
            </label>
            <input
              value={draft.phone}
              onChange={(event) => setDraft({ ...draft, phone: event.target.value })}
              className="h-11 w-full rounded-xl border border-slate-200 px-3"
            />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Address
            </label>
            <input
              value={draft.address}
              onChange={(event) => setDraft({ ...draft, address: event.target.value })}
              className="h-11 w-full rounded-xl border border-slate-200 px-3"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
