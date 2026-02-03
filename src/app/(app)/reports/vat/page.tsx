export default function VatSummaryPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">VAT summary</h2>
        <p className="text-sm text-slate-600">Breakdown by VAT type and totals.</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <input className="h-10 rounded-xl border border-slate-200 px-3 text-sm" defaultValue="Feb 1, 2026" />
          <input className="h-10 rounded-xl border border-slate-200 px-3 text-sm" defaultValue="Feb 3, 2026" />
          <button className="h-10 rounded-xl bg-[#1a73e8] px-4 text-sm font-semibold text-white">Run</button>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {["VATable", "Zero-rated", "Exempt"].map((label) => (
            <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{label}</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">₱12,450.00</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
