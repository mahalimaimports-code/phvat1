const customers = [
  { id: "CUST-001", name: "Luna Retail", tin: "123-456-789-000", balance: "₱6,200.00" },
  { id: "CUST-002", name: "SariHub", tin: "—", balance: "₱1,250.00" },
  { id: "CUST-003", name: "Bituin Co.", tin: "987-654-321-000", balance: "₱9,800.00" },
];

export default function CustomersPage() {
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
        <div className="flex flex-wrap items-center gap-3">
          <input className="h-10 w-full max-w-xs rounded-xl border border-slate-200 px-3 text-sm" placeholder="Search customers" />
          <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm">
            <option>All balances</option>
            <option>With balance</option>
            <option>Paid</option>
          </select>
        </div>

        <div className="mt-6 space-y-3">
          {customers.map((cust) => (
            <div key={cust.id} className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">{cust.name}</p>
                <p className="text-xs text-slate-500">{cust.id} · TIN: {cust.tin}</p>
              </div>
              <p className="text-sm font-semibold text-slate-900">{cust.balance}</p>
              <a href={`/customers/${cust.id}`} className="text-xs font-semibold text-[#1a73e8]">View</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
