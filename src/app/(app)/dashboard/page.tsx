const stats = [
  { label: "Total sales (MTD)", value: "₱128,450.00", note: "+12.4% vs last month" },
  { label: "VAT payable", value: "₱12,845.00", note: "Next filing: Mar 31" },
  { label: "Outstanding balance", value: "₱32,100.00", note: "8 invoices unpaid" },
  { label: "Documents issued", value: "142", note: "Invoices + ORs" },
];

const recent = [
  { id: "INV-1042", customer: "Luna Retail", amount: "₱4,500.00", status: "Paid" },
  { id: "OR-5821", customer: "SariHub", amount: "₱1,250.00", status: "Pending" },
  { id: "INV-1041", customer: "Bituin Co.", amount: "₱9,800.00", status: "Overdue" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold text-slate-900">Dashboard</h2>
        <p className="text-sm text-slate-600">
          Quick overview of sales, VAT, and outstanding balances.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
              {stat.label}
            </p>
            <p className="mt-3 text-2xl font-semibold text-slate-900">{stat.value}</p>
            <p className="mt-2 text-xs text-slate-500">{stat.note}</p>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Sales trend</h3>
            <button className="text-xs font-semibold text-[#1a73e8]">View report</button>
          </div>
          <div className="mt-6 h-52 rounded-xl border border-dashed border-slate-200 bg-slate-50" />
          <p className="mt-3 text-xs text-slate-500">Placeholder for chart.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Trial status</h3>
          <p className="mt-2 text-sm text-slate-600">5 days left on your free trial.</p>
          <button className="mt-4 h-10 w-full rounded-xl bg-[#1a73e8] text-sm font-semibold text-white">
            Upgrade now
          </button>
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
            Next billing: March 8, 2026
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Recent activity</h3>
          <button className="text-xs font-semibold text-[#1a73e8]">See all</button>
        </div>
        <div className="mt-4 space-y-3">
          {recent.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.id}</p>
                <p className="text-xs text-slate-500">{item.customer}</p>
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
