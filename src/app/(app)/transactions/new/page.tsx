export default function NewTransactionPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">New transaction</h2>
        <p className="text-sm text-slate-600">
          Record a sale and compute VAT automatically.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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
              <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" placeholder="Feb 3, 2026" />
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">Line items</h3>
            {[
              { item: "Social Media Ads", qty: "1", price: "₱4,000.00" },
              { item: "Service Fee", qty: "1", price: "₱500.00" },
            ].map((line) => (
              <div key={line.item} className="grid grid-cols-1 gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 sm:grid-cols-4">
                <div className="sm:col-span-2">
                  <p className="text-sm font-semibold text-slate-900">{line.item}</p>
                  <p className="text-xs text-slate-500">VAT: Standard</p>
                </div>
                <p className="text-sm text-slate-600">Qty: {line.qty}</p>
                <p className="text-sm text-slate-900">{line.price}</p>
              </div>
            ))}
            <button className="text-xs font-semibold text-[#1a73e8]">+ Add item</button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Summary</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₱4,500.00</span>
            </div>
            <div className="flex justify-between">
              <span>VAT (12%)</span>
              <span>₱540.00</span>
            </div>
            <div className="flex justify-between">
              <span>Withholding</span>
              <span>₱0.00</span>
            </div>
            <div className="flex justify-between font-semibold text-slate-900">
              <span>Total</span>
              <span>₱5,040.00</span>
            </div>
          </div>
          <button className="mt-6 h-11 w-full rounded-xl bg-[#1a73e8] text-sm font-semibold text-white">
            Save transaction
          </button>
          <button className="mt-3 h-11 w-full rounded-xl border border-slate-200 text-sm font-semibold text-slate-600">
            Save as draft
          </button>
        </div>
      </section>
    </div>
  );
}
