export default function CreditNotePage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Create credit note</h2>
        <p className="text-sm text-slate-600">
          Issue a credit note to adjust or refund an issued document.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Original document
            </label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" defaultValue="INV-1042" />
          </div>
          <div className="mt-4 space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Reason
            </label>
            <textarea className="min-h-[120px] w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" placeholder="Reason for credit" />
            <p className="text-xs text-slate-500">
              Credit notes are linked to the original document for audit integrity.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Amount</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Original total</span>
              <span>₱5,040.00</span>
            </div>
            <div className="flex justify-between">
              <span>Credit amount</span>
              <span>₱1,000.00</span>
            </div>
          </div>
          <button className="mt-6 h-11 w-full rounded-xl bg-[#1a73e8] text-sm font-semibold text-white">
            Issue credit note
          </button>
        </div>
      </section>
    </div>
  );
}
