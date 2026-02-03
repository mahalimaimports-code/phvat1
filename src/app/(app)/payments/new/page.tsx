export default function RecordPaymentPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Record payment</h2>
        <p className="text-sm text-slate-600">Apply a payment to an issued document.</p>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Document</label>
              <select className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm">
                <option>INV-1042 · Luna Retail</option>
                <option>INV-1041 · Bituin Co.</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Payment date</label>
              <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" placeholder="Feb 3, 2026" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Amount</label>
              <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" placeholder="₱5,040.00" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Method</label>
              <select className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm">
                <option>Bank Transfer</option>
                <option>Cash</option>
                <option>E-Wallet</option>
                <option>Card</option>
              </select>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Reference</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" placeholder="Transfer reference" />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Document balance</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Total</span>
              <span>₱5,040.00</span>
            </div>
            <div className="flex justify-between">
              <span>Previously paid</span>
              <span>₱0.00</span>
            </div>
            <div className="flex justify-between font-semibold text-slate-900">
              <span>Balance due</span>
              <span>₱5,040.00</span>
            </div>
          </div>
          <button className="mt-6 h-11 w-full rounded-xl bg-[#1a73e8] text-sm font-semibold text-white">
            Save payment
          </button>
        </div>
      </section>
    </div>
  );
}
