export default function NewCustomerPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Create customer</h2>
        <p className="text-sm text-slate-600">Save customer details for faster invoicing.</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Customer name</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" placeholder="Luna Retail" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">TIN (optional)</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" placeholder="000-000-000-000" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Email</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" placeholder="billing@luna.ph" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Phone</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" placeholder="+63 9XX XXX XXXX" />
          </div>
          <div className="sm:col-span-2 space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Address</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" placeholder="Quezon City" />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <button className="text-sm font-semibold text-slate-500">Cancel</button>
          <button className="h-11 rounded-xl bg-[#1a73e8] px-6 text-sm font-semibold text-white">Save customer</button>
        </div>
      </section>
    </div>
  );
}
