export default function BillingCheckoutPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Checkout</h2>
        <p className="text-sm text-slate-600">Complete payment via PayMongo.</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-3 text-sm text-slate-600">
          <p>Plan: Standard · ₱99/month</p>
          <p>Next billing: Mar 8, 2026</p>
        </div>
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          You will be redirected to PayMongo to complete payment securely.
        </div>
        <button className="mt-6 h-11 rounded-xl bg-[#1a73e8] px-6 text-sm font-semibold text-white">
          Proceed to PayMongo checkout
        </button>
      </section>
    </div>
  );
}
