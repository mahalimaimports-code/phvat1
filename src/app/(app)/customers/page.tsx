import EmptyState from "@/components/ui/empty-state";
import Skeleton from "@/components/ui/skeleton";
import { customers } from "@/data/demo";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(value);

const balanceStyles = (balance: number) =>
  balance > 5000
    ? "bg-rose-50 text-rose-700 border-rose-200"
    : "bg-amber-50 text-amber-700 border-amber-200";

export default function CustomersPage() {
  const isLoading = false;

  return (
    <div className="space-y-6">
      <section className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Customers</h2>
          <p className="text-sm text-slate-600">Store customer details and track balances.</p>
        </div>
        <a href="/customers/new" className="rounded-xl bg-[#1a73e8] px-4 py-2 text-sm font-semibold text-white">
          New customer
        </a>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <input className="h-10 w-full max-w-xs rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700" placeholder="Search customers" />
            <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>All balances</option>
              <option>With balance</option>
              <option>Paid</option>
            </select>
          </div>
          <button className="h-10 rounded-xl border border-slate-200 px-3 text-sm font-semibold text-slate-600">
            Export
          </button>
        </div>

        <div className="mt-6 space-y-3">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-16" />
            ))
          ) : customers.length === 0 ? (
            <EmptyState
              title="No customers yet"
              description="Add customers to speed up invoicing and track balances."
              action={{ label: "New customer", href: "/customers/new" }}
            />
          ) : (
            customers.map((cust) => (
              <div key={cust.id} className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{cust.name}</p>
                  <p className="text-xs text-slate-500">
                    {cust.id} · TIN: {cust.tin ?? "N/A"}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${balanceStyles(cust.balance)}`}
                >
                  {formatCurrency(cust.balance)} due
                </span>
                <a href={`/customers/${cust.id}`} className="text-xs font-semibold text-[#1a73e8]">View</a>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
