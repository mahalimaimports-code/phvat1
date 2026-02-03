const history = [
  { id: "PM-2026-0021", amount: "₱99.00", date: "Feb 1, 2026", status: "Paid" },
  { id: "PM-2026-0020", amount: "₱99.00", date: "Jan 1, 2026", status: "Paid" },
];

export default function BillingHistoryPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Payment history</h2>
        <p className="text-sm text-slate-600">Track your PayMongo transactions.</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          Receipts are available for every successful charge.
        </div>
        <div className="mt-4 space-y-3">
          {history.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.id}</p>
                <p className="text-xs text-slate-500">{item.date}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-900">{item.amount}</p>
                <p className="text-xs text-slate-500">{item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
