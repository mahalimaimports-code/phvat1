"use client";

import { useState } from "react";
import { documents } from "@/data/demo";

export default function RecordPaymentPage() {
  const [form, setForm] = useState({
    document: documents[0]?.id ?? "INV-1042",
    date: "Feb 3, 2026",
    amount: "₱5,040.00",
    method: "Bank Transfer",
    reference: "BPI-2026-0021",
  });
  const [saved, setSaved] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Record payment</h2>
        <p className="text-sm text-slate-600">Apply a payment to an issued document.</p>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Payment details
            </p>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
              Draft
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Document</label>
              <select
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm"
                value={form.document}
                onChange={(event) => setForm((prev) => ({ ...prev, document: event.target.value }))}
              >
                {documents.map((doc) => (
                  <option key={doc.id}>
                    {doc.id} · {doc.customer}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Payment date</label>
              <input
                className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
                value={form.date}
                onChange={(event) => setForm((prev) => ({ ...prev, date: event.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Amount</label>
              <input
                className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
                value={form.amount}
                onChange={(event) => setForm((prev) => ({ ...prev, amount: event.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Method</label>
              <select
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm"
                value={form.method}
                onChange={(event) => setForm((prev) => ({ ...prev, method: event.target.value }))}
              >
                <option>Bank Transfer</option>
                <option>Cash</option>
                <option>E-Wallet</option>
                <option>Card</option>
              </select>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Reference</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
              value={form.reference}
              onChange={(event) => setForm((prev) => ({ ...prev, reference: event.target.value }))}
            />
          </div>
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
            Partial payments will reduce balance due automatically.
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Document balance</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Total</span>
              <span>₱5,040.00</span>
            </div>
            <div className="flex justify-between">
              <span>Previously paid</span>
              <span>₱0.00</span>
            </div>
            <div className="flex justify-between font-semibold text-slate-900">
              <span>Balance due</span>
              <span>₱5,040.00</span>
            </div>
          </div>
          {saved ? (
            <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs text-emerald-700">
              {saved}
            </div>
          ) : null}
          <button
            type="button"
            onClick={() => setSaved(`Payment saved for ${form.document}.`)}
            className="mt-6 h-11 w-full rounded-xl bg-[#1a73e8] text-sm font-semibold text-white"
          >
            Save payment
          </button>
        </div>
      </section>
    </div>
  );
}
