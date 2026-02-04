import EmptyState from "@/components/ui/empty-state";
import Skeleton from "@/components/ui/skeleton";
import { transactions } from "@/data/demo";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(value);

const statusStyles: Record<string, string> = {
  Issued: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Draft: "bg-amber-50 text-amber-700 border-amber-200",
};

export default function TransactionsPage() {
  const isLoading = false;

  return (
    <div className="space-y-6">
      <section className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Transactions</h2>
          <p className="text-sm text-slate-600">
            Record sales and track VAT details with audit-safe history.
          </p>
        </div>
        <a
          href="/transactions/new"
          className="rounded-xl bg-[#1a73e8] px-4 py-2 text-sm font-semibold text-white"
        >
          New transaction
        </a>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <input
              className="h-10 w-full max-w-xs rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700"
              placeholder="Search by customer or ID"
            />
            <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>All VAT types</option>
              <option>Standard</option>
              <option>Zero-rated</option>
              <option>Exempt</option>
            </select>
            <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>Status</option>
              <option>Issued</option>
              <option>Draft</option>
            </select>
          </div>
          <button className="h-10 rounded-xl border border-slate-200 px-3 text-sm font-semibold text-slate-600">
            Export CSV
          </button>
        </div>

        <div className="mt-6 space-y-3">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-16" />
            ))
          ) : transactions.length === 0 ? (
            <EmptyState
              title="No transactions yet"
              description="Create your first transaction to start tracking VAT and invoices."
              action={{ label: "New transaction", href: "/transactions/new" }}
            />
          ) : (
            transactions.map((row) => (
              <div
                key={row.id}
                className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">{row.id}</p>
                  <p className="text-xs text-slate-500">{row.date}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{row.customer}</p>
                  <p className="text-xs text-slate-500">VAT: {row.vatType}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-900">{formatCurrency(row.amount)}</p>
                  <span
                    className={`mt-2 inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusStyles[row.status] ?? "border-slate-200 text-slate-500"}`}
                  >
                    {row.status}
                  </span>
                </div>
                <a href={`/transactions/${row.id}`} className="text-xs font-semibold text-[#1a73e8]">
                  View
                </a>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
