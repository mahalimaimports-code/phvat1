export default function CustomerDetailPage() {
  return (
    <div className="space-y-6">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Luna Retail</h2>
          <p className="text-sm text-slate-600">TIN: 123-456-789-000 · Balance: ₱6,200.00</p>
        </div>
        <div className="flex gap-3">
          <a href="/customers/CUST-001/statement" className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
            Generate statement
          </a>
          <button className="rounded-xl bg-[#1a73e8] px-4 py-2 text-sm font-semibold text-white">
            Edit customer
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900">Recent documents</h3>
        <p className="mt-2 text-xs text-slate-500">Outstanding balance: ₱6,200.00</p>
        <div className="mt-4 space-y-3">
          {[
            { id: "INV-1042", amount: "₱5,040.00", status: "Paid" },
            { id: "INV-1041", amount: "₱9,800.00", status: "Overdue" },
          ].map((doc) => (
            <div key={doc.id} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <p className="text-sm font-semibold text-slate-900">{doc.id}</p>
              <p className="text-sm text-slate-600">{doc.amount}</p>
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
