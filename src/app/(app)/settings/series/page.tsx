export default function SeriesSettingsPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Invoice/OR series</h2>
        <p className="text-sm text-slate-600">Manage numbering and prefixes.</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          Changing series affects future documents only. Historical records remain unchanged.
        </div>
        <div className="space-y-4">
          {["Invoice", "Official Receipt", "Credit Note"].map((label) => (
            <div key={label} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">{label}</p>
                <button className="text-xs font-semibold text-[#1a73e8]">Edit</button>
              </div>
              <p className="text-xs text-slate-500">Prefix: {label === "Invoice" ? "INV-" : label === "Official Receipt" ? "OR-" : "CN-"} · Current: 1042</p>
            </div>
          ))}
        </div>
        <button className="mt-6 h-10 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600">Add series</button>
      </section>
    </div>
  );
}
