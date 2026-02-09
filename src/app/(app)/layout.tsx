import SidebarNav from "@/components/navigation/sidebar-nav";
import MobileNav from "@/components/navigation/mobile-nav";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Transactions", href: "/transactions" },
  { label: "Documents", href: "/documents" },
  { label: "Customers", href: "/customers" },
  { label: "Items", href: "/items" },
  { label: "Payments", href: "/payments" },
  { label: "Reports", href: "/reports" },
  { label: "Billing", href: "/billing" },
  { label: "Settings", href: "/settings" },
];

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 flex-col border-r border-slate-200 bg-white px-6 py-8 lg:flex">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#1a73e8] text-sm font-semibold text-white">
              PH
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Customer
              </p>
              <p className="text-lg font-semibold text-slate-900">Suite</p>
            </div>
          </div>

          <div className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Main
          </div>
          <SidebarNav items={navItems} />

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
            <p className="font-semibold text-slate-700">Compliance status</p>
            <p className="mt-2">VAT status verified · Series active</p>
            <div className="mt-3 h-2 rounded-full bg-white">
              <div className="h-2 w-3/4 rounded-full bg-[#1a73e8]" />
            </div>
          </div>

          <div className="mt-auto rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-500">
            <p className="font-semibold text-slate-700">Trial: 5 days left</p>
            <p className="mt-2">Upgrade anytime to keep issuing documents.</p>
            <a
              href="/billing"
              className="mt-3 block w-full rounded-lg bg-[#1a73e8] px-3 py-2 text-center text-xs font-semibold text-white"
            >
              Upgrade
            </a>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 px-6 py-4 backdrop-blur">
            <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  PH Compliance
                </p>
                <h1 className="text-lg font-semibold text-slate-900">Customer Workspace</h1>
              </div>
              <div className="flex flex-1 items-center justify-end gap-3">
                <MobileNav items={navItems} />
                <input
                  className="hidden h-10 w-full max-w-xs rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-600 lg:block"
                  placeholder="Search invoices, customers..."
                />
                <a
                  href="/transactions/new"
                  className="hidden h-10 items-center rounded-xl bg-[#1a73e8] px-4 text-sm font-semibold text-white lg:inline-flex"
                >
                  New transaction
                </a>
                <a
                  href="/settings/notifications"
                  className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-600"
                >
                  Support
                </a>
                <div className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Juan Dela Cruz
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 px-6 py-6 lg:px-10 lg:py-8">
            <div className="mx-auto w-full max-w-[1200px]">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
