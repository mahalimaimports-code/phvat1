export default function DocumentDetailPage() {
  return (
    <div className="space-y-6">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">INV-1042</h2>
          <p className="text-sm text-slate-600">Invoice · Issued Feb 3, 2026 · Paid</p>
        </div>
        <div className="flex gap-3">
          <a href="/documents/INV-1042/credit-note" className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
            Create credit note
          </a>
          <a href="/documents/INV-1042/void" className="rounded-xl bg-[#1a73e8] px-4 py-2 text-sm font-semibold text-white">
            Void document
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Document details</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p>Customer: Luna Retail</p>
            <p>Series: INV-</p>
            <p>Number: 1042</p>
            <p>VAT type: Standard</p>
            <p>Payment status: Paid</p>
          </div>
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
            BIR fields: RDO 043 · ATP-2025-001 · PTU-12345
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
              <span>VAT</span>
              <span>₱540.00</span>
            </div>
            <div className="flex justify-between font-semibold text-slate-900">
              <span>Total</span>
              <span>₱5,040.00</span>
            </div>
          </div>
          <button className="mt-6 h-10 w-full rounded-xl border border-slate-200 text-sm font-semibold text-slate-600">
            Download PDF
          </button>
        </div>
      </section>
    </div>
  );
}
