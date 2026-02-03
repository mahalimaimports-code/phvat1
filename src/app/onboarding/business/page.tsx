export default function BusinessProfilePage() {
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
                  Business Profile
                </p>
              </div>
            </div>
            <span className="rounded-full border border-[#1a73e8]/30 bg-[#1a73e8]/10 px-3 py-1 text-xs font-semibold text-[#1a73e8]">
              Step 2 of 4
            </span>
          </div>

          <div className="mt-10 space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-slate-900">
              Tell us about your business.
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              This information appears on your invoices and official receipts.
              We also use it to keep your compliance settings accurate.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "BIR-ready",
                body: "Store your registered business details for compliant documents.",
              },
              {
                title: "Audit-safe",
                body: "Once issued, documents retain the original business profile data.",
              },
              {
                title: "Flexible",
                body: "Update business details anytime with audit logging.",
              },
              {
                title: "Team aligned",
                body: "Managers see the same master details across workflows.",
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
            <p>We'll help you complete BIR fields later in Settings.</p>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 font-medium text-slate-600">
              Drafted for invoices
            </span>
          </div>
        </section>

        <section className="flex items-center">
          <div className="w-full rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_20px_48px_rgba(15,23,42,0.12)]">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Business profile
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Use your DTI/SEC registered details to avoid audit issues.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  Business name
                </label>
                <input
                  className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20"
                  placeholder="ABC Online Trading"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                    TIN (optional)
                  </label>
                  <input
                    className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20"
                    placeholder="000-000-000-000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Registered phone
                  </label>
                  <input
                    className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20"
                    placeholder="+63 9XX XXX XXXX"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  Registered address
                </label>
                <input
                  className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20"
                  placeholder="Unit 3, 2nd Floor, Makati City"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Industry
                  </label>
                  <select className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20">
                    <option>Online selling</option>
                    <option>Retail</option>
                    <option>Freelancer / Professional</option>
                    <option>Services</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Business type
                  </label>
                  <select className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20">
                    <option>Sole Proprietor</option>
                    <option>Partnership</option>
                    <option>Corporation</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button className="text-sm font-semibold text-slate-500">
                Back
              </button>
              <button className="h-11 rounded-xl bg-[#1a73e8] px-6 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(26,115,232,0.35)] transition hover:bg-[#165ec3]">
                Continue
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
