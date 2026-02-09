export default function SeriesSetupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7faff] via-[#f9fbff] to-white text-slate-900">
      <main className="mx-auto grid min-h-screen max-w-[1200px] grid-cols-1 gap-10 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-12">
        <section className="flex flex-col justify-between rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#1a73e8] text-sm font-semibold text-white">
                PH
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Setup
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  Invoice & OR Series
                </p>
              </div>
            </div>
            <span className="rounded-full border border-[#1a73e8]/30 bg-[#1a73e8]/10 px-3 py-1 text-xs font-semibold text-[#1a73e8]">
              Step 4 of 4
            </span>
          </div>

          <div className="mt-10 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Document series
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900">
              Set your document numbering.
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              Your invoice and official receipt numbers must be sequential without
              gaps. Configure your starting series based on your BIR registration.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "Gap-free issuance",
                body: "Numbers increment only when documents are issued successfully.",
              },
              {
                title: "Separate series",
                body: "Manage distinct sequences for Invoice, OR, and Credit Notes.",
              },
              {
                title: "Audit-safe",
                body: "Series changes are logged with full audit history.",
              },
              {
                title: "Flexible",
                body: "Add new series later for new branches or formats.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between text-xs text-slate-500">
            <p>Series setup ensures every issued document is compliant.</p>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 font-medium text-slate-600">
              Required
            </span>
          </div>
        </section>

        <section className="flex items-center">
          <div className="w-full rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_20px_48px_rgba(15,23,42,0.12)]">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Document series
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Add your starting numbers and optional prefixes.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {["Invoice", "Official Receipt"].map((label) => (
                <div key={label} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900">{label}</p>
                    <span className="text-xs font-medium text-slate-500">Active</span>
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                        Prefix (optional)
                      </label>
                      <input
                        className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20"
                        placeholder="INV-"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                        Starting number
                      </label>
                      <input
                        className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20"
                        placeholder="1001"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <a href="/onboarding/vat" className="text-sm font-semibold text-slate-500">Back</a>
              <a
                href="/onboarding/complete"
                className="h-11 rounded-xl bg-[#1a73e8] px-6 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(26,115,232,0.35)] transition hover:bg-[#165ec3]"
              >
                Finish setup
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
