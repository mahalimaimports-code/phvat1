"use client";

import { useState } from "react";

export default function NotificationsSettingsPage() {
  const [connection, setConnection] = useState({
    pageId: "123456789",
    accessToken: "EAAB...",
    verifyToken: "phvat-verify",
  });
  const [saved, setSaved] = useState<string | null>(null);
  const [alerts, setAlerts] = useState({
    inApp: true,
    email: true,
    sms: false,
    paymentReminders: true,
    overdue: false,
    weeklySummary: true,
    frequency: "Immediate",
  });

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Notifications</h2>
        <p className="text-sm text-slate-600">Configure in-app, email, SMS/phone alerts.</p>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Messenger setup</h3>
          <p className="mt-2 text-xs text-slate-500">
            Send payment reminders and due notices directly to customers.
          </p>
          <div className="mt-4 space-y-3">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Page ID</label>
              <input
                className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
                value={connection.pageId}
                onChange={(event) => setConnection((prev) => ({ ...prev, pageId: event.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Page access token</label>
              <input
                className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
                value={connection.accessToken}
                onChange={(event) => setConnection((prev) => ({ ...prev, accessToken: event.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Verify token</label>
              <input
                className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
                value={connection.verifyToken}
                onChange={(event) => setConnection((prev) => ({ ...prev, verifyToken: event.target.value }))}
              />
            </div>
          </div>
          {saved ? (
            <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs text-emerald-700">
              {saved}
            </div>
          ) : null}
          <button
            type="button"
            onClick={() => setSaved("Messenger connection saved.")}
            className="mt-6 h-11 rounded-xl bg-[#1a73e8] px-6 text-sm font-semibold text-white"
          >
            Save connection
          </button>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Alerts</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 accent-[#1a73e8]"
                checked={alerts.inApp}
                onChange={(event) => setAlerts((prev) => ({ ...prev, inApp: event.target.checked }))}
              />
              In-app notifications
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 accent-[#1a73e8]"
                checked={alerts.email}
                onChange={(event) => setAlerts((prev) => ({ ...prev, email: event.target.checked }))}
              />
              Email alerts
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 accent-[#1a73e8]"
                checked={alerts.sms}
                onChange={(event) => setAlerts((prev) => ({ ...prev, sms: event.target.checked }))}
              />
              SMS / Phone alerts
            </label>
          </div>
          <div className="mt-6 space-y-3 text-sm text-slate-600">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 accent-[#1a73e8]"
                checked={alerts.paymentReminders}
                onChange={(event) =>
                  setAlerts((prev) => ({ ...prev, paymentReminders: event.target.checked }))
                }
              />
              Payment reminders
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 accent-[#1a73e8]"
                checked={alerts.overdue}
                onChange={(event) => setAlerts((prev) => ({ ...prev, overdue: event.target.checked }))}
              />
              Overdue alerts
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 accent-[#1a73e8]"
                checked={alerts.weeklySummary}
                onChange={(event) =>
                  setAlerts((prev) => ({ ...prev, weeklySummary: event.target.checked }))
                }
              />
              Weekly summary
            </label>
          </div>
          <div className="mt-6 space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Frequency</label>
            <select
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm"
              value={alerts.frequency}
              onChange={(event) => setAlerts((prev) => ({ ...prev, frequency: event.target.value }))}
            >
              <option>Immediate</option>
              <option>Daily digest</option>
              <option>Weekly digest</option>
            </select>
          </div>
          <button
            type="button"
            onClick={() => setSaved("Notification preferences saved.")}
            className="mt-6 h-11 w-full rounded-xl border border-slate-200 text-sm font-semibold text-slate-600"
          >
            Save alert preferences
          </button>
        </div>
      </section>
    </div>
  );
}
