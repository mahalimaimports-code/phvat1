export default function EditTransactionPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Edit transaction</h2>
        <p className="text-sm text-slate-600">Edits are allowed only before document issuance.</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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
          <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
            <p className="text-sm font-semibold text-slate-900">Social Media Ads</p>
            <p className="text-xs text-slate-500">Qty: 1 · ₱4,000.00</p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
            <p className="text-sm font-semibold text-slate-900">Service Fee</p>
            <p className="text-xs text-slate-500">Qty: 1 · ₱500.00</p>
          </div>
          <button className="text-xs font-semibold text-[#1a73e8]">+ Add item</button>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button className="text-sm font-semibold text-slate-500">Cancel</button>
          <button className="h-11 rounded-xl bg-[#1a73e8] px-6 text-sm font-semibold text-white">
            Save changes
          </button>
        </div>
      </section>
    </div>
  );
}
