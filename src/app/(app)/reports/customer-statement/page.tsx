export default function CustomerStatementReportPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Customer statement report</h2>
        <p className="text-sm text-slate-600">Generate statements across customers.</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Customer</label>
            <select className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm">
              <option>All customers</option>
              <option>Luna Retail</option>
              <option>SariHub</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Period</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" defaultValue="Jan 1, 2026 - Feb 3, 2026" />
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          Statements include unpaid invoices, credits, and recorded payments.
        </div>
        <button className="mt-6 h-11 rounded-xl bg-[#1a73e8] px-6 text-sm font-semibold text-white">Generate</button>
      </section>
    </div>
  );
}
