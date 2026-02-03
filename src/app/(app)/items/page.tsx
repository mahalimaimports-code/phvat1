const items = [
  { id: "ITEM-001", name: "Social Media Ads", price: "₱4,000.00", vat: "Standard" },
  { id: "ITEM-002", name: "Service Fee", price: "₱500.00", vat: "Standard" },
  { id: "ITEM-003", name: "Consulting", price: "₱2,500.00", vat: "Zero-rated" },
];

export default function ItemsPage() {
  return (
    <div className="space-y-6">
      <section className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Items</h2>
          <p className="text-sm text-slate-600">Maintain your product and service catalog.</p>
        </div>
        <a href="/items/new" className="rounded-xl bg-[#1a73e8] px-4 py-2 text-sm font-semibold text-white">
          New item
        </a>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <input className="h-10 w-full max-w-xs rounded-xl border border-slate-200 px-3 text-sm" placeholder="Search items" />
          <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm">
            <option>All VAT types</option>
            <option>Standard</option>
            <option>Zero-rated</option>
            <option>Exempt</option>
          </select>
        </div>

        <div className="mt-6 space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                <p className="text-xs text-slate-500">{item.id} · VAT: {item.vat}</p>
              </div>
              <p className="text-sm font-semibold text-slate-900">{item.price}</p>
              <a href={`/items/${item.id}`} className="text-xs font-semibold text-[#1a73e8]">View</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
