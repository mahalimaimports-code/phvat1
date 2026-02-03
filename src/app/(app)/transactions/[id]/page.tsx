const lineItems = [
  { name: "Social Media Ads", qty: 1, price: "₱4,000.00" },
  { name: "Service Fee", qty: 1, price: "₱500.00" },
];

export default function TransactionDetailPage() {
  return (
    <div className="space-y-6">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">TRX-2026-0142</h2>
          <p className="text-sm text-slate-600">Issued · Feb 3, 2026 · VAT Standard</p>
        </div>
        <div className="flex gap-3">
          <a href="/documents/new" className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
            Issue document
          </a>
          <a href="/transactions/TRX-2026-0142/edit" className="rounded-xl bg-[#1a73e8] px-4 py-2 text-sm font-semibold text-white">
            Edit
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Line items</h3>
          <div className="mt-4 space-y-3">
            {lineItems.map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">Qty: {item.qty}</p>
                </div>
                <p className="text-sm text-slate-900">{item.price}</p>
              </div>
            ))}
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
            <div className="flex justify-between font-semibold text-slate-900">
              <span>Total</span>
              <span>₱5,040.00</span>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
            Customer: Luna Retail
          </div>
        </div>
      </section>
    </div>
  );
}
