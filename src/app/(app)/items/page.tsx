import EmptyState from "@/components/ui/empty-state";
import Skeleton from "@/components/ui/skeleton";

const items = [
  { id: "ITEM-001", name: "Social Media Ads", price: "₱4,000.00", vat: "Standard" },
  { id: "ITEM-002", name: "Service Fee", price: "₱500.00", vat: "Standard" },
  { id: "ITEM-003", name: "Consulting", price: "₱2,500.00", vat: "Zero-rated" },
];

const vatStyles: Record<string, string> = {
  Standard: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Zero-rated": "bg-amber-50 text-amber-700 border-amber-200",
  Exempt: "bg-slate-100 text-slate-600 border-slate-200",
};

export default function ItemsPage() {
  const isLoading = false;

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
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <input className="h-10 w-full max-w-xs rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700" placeholder="Search items" />
            <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>All VAT types</option>
              <option>Standard</option>
              <option>Zero-rated</option>
              <option>Exempt</option>
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
          ) : items.length === 0 ? (
            <EmptyState
              title="No items yet"
              description="Create an item catalog to speed up transaction entry."
              action={{ label: "New item", href: "/items/new" }}
            />
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                    <span>{item.id}</span>
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${vatStyles[item.vat] ?? "border-slate-200 text-slate-500"}`}
                    >
                      {item.vat}
                    </span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-slate-900">{item.price}</p>
                <a href={`/items/${item.id}`} className="text-xs font-semibold text-[#1a73e8]">View</a>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
