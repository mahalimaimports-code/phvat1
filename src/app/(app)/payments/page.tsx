import EmptyState from "@/components/ui/empty-state";
import Skeleton from "@/components/ui/skeleton";

const payments = [
  { id: "PAY-0091", doc: "INV-1042", amount: "₱5,040.00", method: "Bank Transfer", date: "Feb 3, 2026" },
  { id: "PAY-0090", doc: "OR-5821", amount: "₱1,250.00", method: "Cash", date: "Feb 2, 2026" },
];

const methodStyles: Record<string, string> = {
  "Bank Transfer": "bg-blue-50 text-blue-700 border-blue-200",
  Cash: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "E-Wallet": "bg-amber-50 text-amber-700 border-amber-200",
};

export default function PaymentsPage() {
  const isLoading = false;

  return (
    <div className="space-y-6">
      <section className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Payments</h2>
          <p className="text-sm text-slate-600">Track payments and partial settlements.</p>
        </div>
        <a href="/payments/new" className="rounded-xl bg-[#1a73e8] px-4 py-2 text-sm font-semibold text-white">
          Record payment
        </a>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <input className="h-10 w-full max-w-xs rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700" placeholder="Search by document" />
            <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>All methods</option>
              <option>Cash</option>
              <option>Bank Transfer</option>
              <option>E-Wallet</option>
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
          ) : payments.length === 0 ? (
            <EmptyState
              title="No payments recorded"
              description="Record payments to update balances and receipts."
              action={{ label: "Record payment", href: "/payments/new" }}
            />
          ) : (
            payments.map((pay) => (
              <div key={pay.id} className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{pay.id}</p>
                  <p className="text-xs text-slate-500">{pay.doc}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{pay.amount}</p>
                  <span
                    className={`mt-2 inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${methodStyles[pay.method] ?? "border-slate-200 text-slate-500"}`}
                  >
                    {pay.method}
                  </span>
                </div>
                <p className="text-xs text-slate-500">{pay.date}</p>
                <a href={`/payments/${pay.id}`} className="text-xs font-semibold text-[#1a73e8]">View</a>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
