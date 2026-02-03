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

          <nav className="mt-10 space-y-2 text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between rounded-xl px-3 py-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              >
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="mt-auto rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
            <p className="font-semibold text-slate-700">Trial: 5 days left</p>
            <p className="mt-2">Upgrade anytime to keep issuing documents.</p>
            <button className="mt-3 w-full rounded-lg bg-[#1a73e8] px-3 py-2 text-xs font-semibold text-white">
              Upgrade
            </button>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                PH Compliance
              </p>
              <h1 className="text-lg font-semibold text-slate-900">Customer Workspace</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-600">
                Support
              </button>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Juan Dela Cruz
              </div>
            </div>
          </header>
          <main className="flex-1 px-6 py-6 lg:px-10 lg:py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
