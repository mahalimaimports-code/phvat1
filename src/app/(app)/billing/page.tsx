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
          <button className="mt-4 h-10 rounded-xl border border-slate-200 px-4 text-xs font-semibold text-slate-600">
            Link bank for auto-pay
          </button>
          <a href="/billing/history" className="mt-4 inline-flex text-xs font-semibold text-[#1a73e8]">
            View payment history
          </a>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">Bills & invoices overview</h3>
          <button className="text-xs font-semibold text-[#1a73e8]">Download PDF</button>
        </div>
        <div className="mt-4 space-y-3">
          {[
            { id: "INV-1042", type: "Invoice", amount: "₱5,040.00", status: "Paid" },
            { id: "INV-1041", type: "Invoice", amount: "₱9,800.00", status: "Overdue" },
            { id: "SUB-2026-02", type: "Subscription", amount: "₱99.00", status: "Paid" },
          ].map((item) => (
            <a
              key={item.id}
              href="#"
              className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.id}</p>
                <p className="text-xs text-slate-500">{item.type}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-900">{item.amount}</p>
                <p className="text-xs text-slate-500">{item.status}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
