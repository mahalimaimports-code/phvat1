import { customers, documents } from "@/data/demo";

const customer = customers[0];
const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(value);

export default function CustomerDetailPage() {
  return (
    <div className="space-y-6">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">{customer.name}</h2>
          <p className="text-sm text-slate-600">
            TIN: {customer.tin ?? "N/A"} · Balance: {formatCurrency(customer.balance)}
          </p>
        </div>
        <div className="flex gap-3">
          <a href={`/customers/${customer.id}/statement`} className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
            Generate statement
          </a>
          <button className="rounded-xl bg-[#1a73e8] px-4 py-2 text-sm font-semibold text-white">
            Edit customer
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900">Recent documents</h3>
        <p className="mt-2 text-xs text-slate-500">
          Outstanding balance: {formatCurrency(customer.balance)}
        </p>
        <div className="mt-4 space-y-3">
          {documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <p className="text-sm font-semibold text-slate-900">{doc.id}</p>
              <p className="text-sm text-slate-600">{formatCurrency(doc.amount)}</p>
              <span className={`text-[11px] font-semibold ${doc.status === "Paid" ? "text-emerald-600" : "text-rose-600"}`}>
                {doc.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
