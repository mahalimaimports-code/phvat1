export default function NewItemPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Create item</h2>
        <p className="text-sm text-slate-600">Add a product or service to your catalog.</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Item name</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" placeholder="Social Media Ads" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">SKU</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" placeholder="SMA-001" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Unit price</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" placeholder="₱4,000.00" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">VAT type</label>
            <select className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm">
              <option>Standard</option>
              <option>Zero-rated</option>
              <option>Exempt</option>
            </select>
            <p className="text-xs text-slate-500">
              VAT type controls line-item VAT behavior on documents.
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <button className="text-sm font-semibold text-slate-500">Cancel</button>
          <button className="h-11 rounded-xl bg-[#1a73e8] px-6 text-sm font-semibold text-white">Save item</button>
        </div>
      </section>
    </div>
  );
}
