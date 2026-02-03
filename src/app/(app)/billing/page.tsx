export default function BillingPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Billing</h2>
        <p className="text-sm text-slate-600">Manage your plan and payment methods.</p>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Current plan</h3>
          <p className="mt-2 text-sm text-slate-600">Starter Plan · ₱49/month</p>
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
            Trial ends on Feb 8, 2026
          </div>
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700">
            Upgrade before trial end to keep issuing documents.
          </div>
          <a href="/billing/checkout" className="mt-6 inline-flex h-11 items-center rounded-xl bg-[#1a73e8] px-6 text-sm font-semibold text-white">
            Upgrade plan
          </a>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Payment method</h3>
          <p className="mt-2 text-sm text-slate-600">PayMongo checkout on file.</p>
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
            Status: Active · Auto-renew enabled
          </div>
          <a href="/billing/history" className="mt-6 inline-flex text-xs font-semibold text-[#1a73e8]">
            View payment history
          </a>
        </div>
      </section>
    </div>
  );
}
