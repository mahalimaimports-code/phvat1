"use client";

import { useState } from "react";

export default function NewCustomerPage() {
  const [form, setForm] = useState({
    name: "Luna Retail",
    tin: "000-000-000-000",
    email: "billing@luna.ph",
    phone: "+63 917 221 4401",
    address: "Quezon City",
  });
  const [saved, setSaved] = useState<string | null>(null);

  const handleChange =
    (field: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleCancel = () => {
    setForm({
      name: "Luna Retail",
      tin: "000-000-000-000",
      email: "billing@luna.ph",
      phone: "+63 917 221 4401",
      address: "Quezon City",
    });
    setSaved("Changes discarded.");
  };

  const handleSave = () => {
    setSaved(`Saved customer: ${form.name}.`);
  };

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Create customer</h2>
        <p className="text-sm text-slate-600">Save customer details for faster invoicing.</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {saved ? (
          <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs text-emerald-700">
            {saved}
          </div>
        ) : null}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Customer name</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={form.name}
              onChange={handleChange("name")}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">TIN (optional)</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={form.tin}
              onChange={handleChange("tin")}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Email</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={form.email}
              onChange={handleChange("email")}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Phone</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={form.phone}
              onChange={handleChange("phone")}
            />
          </div>
          <div className="sm:col-span-2 space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Address</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={form.address}
              onChange={handleChange("address")}
            />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={handleCancel}
            className="text-sm font-semibold text-slate-500"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="h-11 rounded-xl bg-[#1a73e8] px-6 text-sm font-semibold text-white"
          >
            Save customer
          </button>
        </div>
      </section>
    </div>
  );
}
