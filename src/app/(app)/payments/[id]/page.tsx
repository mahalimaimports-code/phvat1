import { payments } from "@/data/demo";

const payment = payments[0];
const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(value);

export default function PaymentDetailPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">{payment.id}</h2>
        <p className="text-sm text-slate-600">{payment.method} · {payment.date}</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-2 text-sm text-slate-600">
          <p>Document: {payment.doc}</p>
          <p>Customer: Luna Retail Ventures</p>
          <p>Amount: {formatCurrency(payment.amount)}</p>
          <p>Reference: {payment.reference}</p>
        </div>
      </section>
    </div>
  );
}
