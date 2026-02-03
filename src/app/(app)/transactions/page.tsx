const rows = [
  {
    id: "TRX-2026-0142",
    date: "Feb 3, 2026",
    customer: "Luna Retail",
    amount: "₱4,500.00",
    vat: "Standard",
    status: "Issued",
  },
  {
    id: "TRX-2026-0141",
    date: "Feb 2, 2026",
    customer: "Bituin Co.",
    amount: "₱9,800.00",
    vat: "Zero-rated",
    status: "Draft",
  },
  {
    id: "TRX-2026-0140",
    date: "Feb 2, 2026",
    customer: "SariHub",
    amount: "₱1,250.00",
    vat: "Exempt",
    status: "Issued",
  },
];

export default function TransactionsPage() {
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
        <div className="flex flex-wrap items-center gap-3">
          <input
            className="h-10 w-full max-w-xs rounded-xl border border-slate-200 px-3 text-sm"
            placeholder="Search by customer or ID"
          />
          <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm">
            <option>All VAT types</option>
            <option>Standard</option>
            <option>Zero-rated</option>
            <option>Exempt</option>
          </select>
          <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm">
            <option>Status</option>
            <option>Issued</option>
            <option>Draft</option>
          </select>
        </div>

        <div className="mt-6 space-y-3">
          {rows.map((row) => (
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
                <p className="text-xs text-slate-500">VAT: {row.vat}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-900">{row.amount}</p>
                <p className="text-xs text-slate-500">{row.status}</p>
              </div>
              <a href={`/transactions/${row.id}`} className="text-xs font-semibold text-[#1a73e8]">
                View
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
