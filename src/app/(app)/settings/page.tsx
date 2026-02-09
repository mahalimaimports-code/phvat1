const settings = [
  { title: "Application linking", desc: "Connect banks and external systems", href: "/settings/app-linking" },
  { title: "Business profile", desc: "RDO, ATP, PTU, VAT blocks", href: "/settings/business" },
  { title: "Invoice/OR series", desc: "Manage numbering sequences", href: "/settings/series" },
  { title: "Templates", desc: "Branding and document layout", href: "/settings/templates" },
  { title: "Team & roles", desc: "Owners and managers", href: "/settings/team" },
  { title: "Notifications", desc: "In-app, email, SMS", href: "/settings/notifications" },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Settings</h2>
        <p className="text-sm text-slate-600">Manage compliance settings and branding.</p>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {settings.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#1a73e8]/50 hover:shadow-md"
          >
            <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            <div className="mt-6 text-xs font-semibold text-[#1a73e8]">
              Open settings →
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}
