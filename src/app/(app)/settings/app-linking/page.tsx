export default function AppLinkingPage() {
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
                <button className="text-xs font-semibold text-[#1a73e8]">Link</button>
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
                <button className="text-xs font-semibold text-[#1a73e8]">Link</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
