export default function ItemDetailPage() {
  return (
    <div className="space-y-6">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Social Media Ads</h2>
          <p className="text-sm text-slate-600">SKU: SMA-001 · VAT: Standard</p>
        </div>
        <button className="rounded-xl bg-[#1a73e8] px-4 py-2 text-sm font-semibold text-white">
          Edit item
        </button>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900">Pricing</h3>
        <p className="mt-2 text-sm text-slate-600">Unit price: ₱4,000.00</p>
      </section>
    </div>
  );
}
