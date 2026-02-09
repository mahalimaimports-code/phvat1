"use client";

import { useState } from "react";
import { businessProfile } from "@/data/demo";

export default function BusinessSettingsPage() {
  const [form, setForm] = useState({
    name: businessProfile.name,
    email: "hello@mahalima.ph",
    tin: businessProfile.tin,
    regDate: "Jan 12, 2022",
    rdo: businessProfile.rdo,
    atp: businessProfile.atp,
    ptu: businessProfile.ptu,
    website: "https://mahalima.ph",
    address: businessProfile.address,
    contactPerson: "Mika Santos",
    contactDetails: "+63 917 221 4401",
    vatStatus: businessProfile.vatStatus,
    vatText: "THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAX",
    nonVatText: "THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAX",
  });
  const [saved, setSaved] = useState<string | null>(null);

  const handleChange =
    (field: keyof typeof form) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleCancel = () => {
    setForm({
      name: businessProfile.name,
      email: "hello@mahalima.ph",
      tin: businessProfile.tin,
      regDate: "Jan 12, 2022",
      rdo: businessProfile.rdo,
      atp: businessProfile.atp,
      ptu: businessProfile.ptu,
      website: "https://mahalima.ph",
      address: businessProfile.address,
      contactPerson: "Mika Santos",
      contactDetails: "+63 917 221 4401",
      vatStatus: businessProfile.vatStatus,
      vatText: "THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAX",
      nonVatText: "THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAX",
    });
    setSaved("Changes discarded.");
  };

  const handleSave = () => {
    setSaved("Business profile updated.");
  };

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Business profile</h2>
        <p className="text-sm text-slate-600">Maintain BIR-required fields.</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {saved ? (
          <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs text-emerald-700">
            {saved}
          </div>
        ) : null}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          These fields print on invoices/official receipts and must match your BIR records.
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Business name</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={form.name}
              onChange={handleChange("name")}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Business email</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={form.email}
              onChange={handleChange("email")}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">TIN</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={form.tin}
              onChange={handleChange("tin")}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Business registration date</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={form.regDate}
              onChange={handleChange("regDate")}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">RDO Code</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={form.rdo}
              onChange={handleChange("rdo")}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">ATP Number</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={form.atp}
              onChange={handleChange("atp")}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">PTU Number</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={form.ptu}
              onChange={handleChange("ptu")}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Website</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={form.website}
              onChange={handleChange("website")}
            />
          </div>
          <div className="sm:col-span-2 space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Business address</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={form.address}
              onChange={handleChange("address")}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Contact person</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={form.contactPerson}
              onChange={handleChange("contactPerson")}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Contact details</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={form.contactDetails}
              onChange={handleChange("contactDetails")}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">VAT Status</label>
            <select
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm"
              value={form.vatStatus}
              onChange={handleChange("vatStatus")}
            >
              <option>VAT-registered</option>
              <option>Non-VAT</option>
            </select>
          </div>
          <div className="sm:col-span-2 space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">VAT text block</label>
            <textarea
              className="min-h-[100px] w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
              value={form.vatText}
              onChange={handleChange("vatText")}
            />
          </div>
          <div className="sm:col-span-2 space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Non-VAT text block</label>
            <textarea
              className="min-h-[100px] w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
              value={form.nonVatText}
              onChange={handleChange("nonVatText")}
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
            Save changes
          </button>
        </div>
      </section>
    </div>
  );
}
