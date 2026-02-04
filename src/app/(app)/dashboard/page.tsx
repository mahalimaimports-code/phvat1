import StatCard from "@/components/ui/stat-card";
import Skeleton from "@/components/ui/skeleton";
import { dashboardStats, recentActivity } from "@/data/demo";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(value);

export default function DashboardPage() {
  const isLoading = false;

  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold text-slate-900">Dashboard</h2>
        <p className="text-sm text-slate-600">
          Quick overview of sales, VAT, and outstanding balances.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-28" />
            ))
          : dashboardStats.map((stat) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.label === "Documents issued" ? String(stat.value) : formatCurrency(stat.value)}
                note={stat.note}
              />
            ))}
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Sales trend</h3>
            <button className="text-xs font-semibold text-[#1a73e8]">View report</button>
          </div>
          {isLoading ? (
            <Skeleton className="mt-6 h-52" />
          ) : (
            <>
              <div className="mt-6 h-52 rounded-xl border border-dashed border-slate-200 bg-slate-50" />
              <p className="mt-3 text-xs text-slate-500">Placeholder for chart.</p>
            </>
          )}
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
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className="h-16" />
              ))
            : recentActivity.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.id}</p>
                    <p className="text-xs text-slate-500">{item.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-900">{formatCurrency(item.amount)}</p>
                    <p className="text-xs text-slate-500">{item.status}</p>
                  </div>
                </div>
              ))}
        </div>
      </section>
    </div>
  );
}
