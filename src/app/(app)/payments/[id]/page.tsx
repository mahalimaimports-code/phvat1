export default function PaymentDetailPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">PAY-0091</h2>
        <p className="text-sm text-slate-600">Bank Transfer · Feb 3, 2026</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-2 text-sm text-slate-600">
          <p>Document: INV-1042</p>
          <p>Customer: Luna Retail</p>
          <p>Amount: ₱5,040.00</p>
          <p>Reference: BPI-2026-0021</p>
        </div>
      </section>
    </div>
  );
}
