export default function NotificationsSettingsPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Notifications</h2>
        <p className="text-sm text-slate-600">Configure Messenger and email alerts.</p>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Messenger setup</h3>
          <div className="mt-4 space-y-3">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Page ID</label>
              <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" placeholder="123456789" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Page access token</label>
              <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" placeholder="EAAB..." />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Verify token</label>
              <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" placeholder="phvat-verify" />
            </div>
          </div>
          <button className="mt-6 h-11 rounded-xl bg-[#1a73e8] px-6 text-sm font-semibold text-white">Save connection</button>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Alerts</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 accent-[#1a73e8]" defaultChecked />
              Payment reminders
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 accent-[#1a73e8]" />
              Overdue alerts
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 accent-[#1a73e8]" defaultChecked />
              Weekly summary
            </label>
          </div>
        </div>
      </section>
    </div>
  );
}
