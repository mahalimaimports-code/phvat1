export default function BusinessSettingsPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Business profile</h2>
        <p className="text-sm text-slate-600">Maintain BIR-required fields.</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Business name</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" defaultValue="ABC Online Trading" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">TIN</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" defaultValue="000-000-000-000" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">RDO Code</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" defaultValue="043" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">ATP Number</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" defaultValue="ATP-2025-001" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">PTU Number</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" defaultValue="PTU-12345" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">VAT Status</label>
            <select className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm">
              <option>VAT-registered</option>
              <option>Non-VAT</option>
            </select>
          </div>
          <div className="sm:col-span-2 space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">VAT text block</label>
            <textarea className="min-h-[100px] w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" defaultValue="THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAX" />
          </div>
          <div className="sm:col-span-2 space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Non-VAT text block</label>
            <textarea className="min-h-[100px] w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" defaultValue="THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAX" />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <button className="text-sm font-semibold text-slate-500">Cancel</button>
          <button className="h-11 rounded-xl bg-[#1a73e8] px-6 text-sm font-semibold text-white">Save changes</button>
        </div>
      </section>
    </div>
  );
}
