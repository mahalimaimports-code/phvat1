export default function CreateDocumentPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Create document</h2>
        <p className="text-sm text-slate-600">
          Issue invoices or official receipts from a recorded transaction.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Document type
              </label>
              <select className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm">
                <option>Invoice</option>
                <option>Official Receipt</option>
                <option>Credit Note</option>
                <option>Quotation</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Transaction
              </label>
              <select className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm">
                <option>TRX-2026-0142 · Luna Retail</option>
                <option>TRX-2026-0141 · Bituin Co.</option>
              </select>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Preview summary</p>
            <div className="mt-3 text-xs text-slate-600">
              VATable sales: ₱4,500.00 · VAT: ₱540.00 · Total: ₱5,040.00
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Issuance</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Series</span>
              <span>INV-</span>
            </div>
            <div className="flex justify-between">
              <span>Next number</span>
              <span>1043</span>
            </div>
          </div>
          <button className="mt-6 h-11 w-full rounded-xl bg-[#1a73e8] text-sm font-semibold text-white">
            Issue document
          </button>
        </div>
      </section>
    </div>
  );
}
