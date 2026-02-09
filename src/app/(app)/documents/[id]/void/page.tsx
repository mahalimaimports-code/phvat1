"use client";

import { useState } from "react";

export default function VoidDocumentPage() {
  const [reason, setReason] = useState("");
  const [voided, setVoided] = useState(false);

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Void document</h2>
        <p className="text-sm text-slate-600">
          Voiding preserves audit history and keeps numbering intact.
        </p>
      </section>

      <section className="rounded-2xl border border-rose-200 bg-white p-6 shadow-sm">
        <div className="rounded-xl border border-rose-100 bg-rose-50 p-4 text-sm text-rose-700">
          This action cannot be undone. A voided document remains in your audit trail.
        </div>
        <div className="mt-6 space-y-3">
          <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
            Reason for voiding
          </label>
          <textarea
            className="min-h-[120px] w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
            placeholder="Provide a reason"
            value={reason}
            onChange={(event) => setReason(event.target.value)}
          />
          <p className="text-xs text-slate-500">
            We will stamp the reason on the void record for compliance.
          </p>
        </div>
        {voided ? (
          <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs text-emerald-700">
            Document voided with reason: {reason || "No reason provided"}.
          </div>
        ) : null}
        <div className="mt-6 flex items-center gap-3">
          <a
            href="/documents/INV-1042"
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600"
          >
            Cancel
          </a>
          <button
            type="button"
            onClick={() => setVoided(true)}
            className="rounded-xl bg-rose-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Confirm void
          </button>
        </div>
      </section>
    </div>
  );
}
