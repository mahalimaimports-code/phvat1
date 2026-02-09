import { documents } from "@/data/demo";
import DemoActionButton from "@/components/ui/demo-action-button";

export default function RecordPaymentPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Record payment</h2>
        <p className="text-sm text-slate-600">Apply a payment to an issued document.</p>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Payment details
            </p>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
              Draft
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Document</label>
              <select className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm">
                {documents.map((doc) => (
                  <option key={doc.id}>
                    {doc.id} · {doc.customer}
                  </option>
                ))}
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
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
            Partial payments will reduce balance due automatically.
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
          <DemoActionButton
            message="Demo: save payment."
            className="mt-6 h-11 w-full rounded-xl bg-[#1a73e8] text-sm font-semibold text-white"
          >
            Save payment
          </DemoActionButton>
        </div>
      </section>
    </div>
  );
}
