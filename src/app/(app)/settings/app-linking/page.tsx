"use client";

import { useState } from "react";
import Modal from "@/components/ui/modal";

export default function AppLinkingPage() {
  const [linked, setLinked] = useState<Record<string, string>>({});
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [accountId, setAccountId] = useState("ACCT-1002");

  const openLink = (app: string) => {
    setActiveApp(app);
  };

  const saveLink = () => {
    if (!activeApp) return;
    setLinked((prev) => ({ ...prev, [activeApp]: accountId }));
    setActiveApp(null);
  };

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Application linking</h2>
        <p className="text-sm text-slate-600">Connect banking platforms and external systems.</p>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Banking connections</h3>
          <p className="mt-2 text-xs text-slate-500">Sync payments automatically each month.</p>
          <div className="mt-4 space-y-3">
            {[
              "BPI Business",
              "BDO Business Online",
              "UnionBank Business",
              "Security Bank",
            ].map((bank) => (
              <div key={bank} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <span className="text-sm font-semibold text-slate-700">{bank}</span>
                <button
                  type="button"
                  onClick={() => openLink(bank)}
                  className="text-xs font-semibold text-[#1a73e8]"
                >
                  {linked[bank] ? "Linked" : "Link"}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">POS & marketplaces</h3>
          <p className="mt-2 text-xs text-slate-500">Import sales from external sources.</p>
          <div className="mt-4 space-y-3">
            {["GCash POS", "Maya Terminal", "Shopify", "Lazada Seller"].map((app) => (
              <div key={app} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <span className="text-sm font-semibold text-slate-700">{app}</span>
                <button
                  type="button"
                  onClick={() => openLink(app)}
                  className="text-xs font-semibold text-[#1a73e8]"
                >
                  {linked[app] ? "Linked" : "Link"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={Boolean(activeApp)}
        title="Link application"
        description="Connect and sync data from the selected platform."
        onClose={() => setActiveApp(null)}
        footer={
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setActiveApp(null)}
              className="h-10 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={saveLink}
              className="h-10 rounded-xl bg-[#1a73e8] px-4 text-sm font-semibold text-white"
            >
              Save link
            </button>
          </div>
        }
      >
        <div className="space-y-3 text-sm text-slate-600">
          <p className="text-sm text-slate-700">
            App: <span className="font-semibold">{activeApp}</span>
          </p>
          <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
            Account ID
          </label>
          <input
            value={accountId}
            onChange={(event) => setAccountId(event.target.value)}
            className="h-11 w-full rounded-xl border border-slate-200 px-3"
          />
        </div>
      </Modal>
    </div>
  );
}
