export default function VatSetupPage() {
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
                  VAT Status
                </p>
              </div>
            </div>
            <span className="rounded-full border border-[#1a73e8]/30 bg-[#1a73e8]/10 px-3 py-1 text-xs font-semibold text-[#1a73e8]">
              Step 3 of 4
            </span>
          </div>

          <div className="mt-10 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              VAT status
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900">
              Confirm your VAT registration.
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              We use this to compute VAT and show the correct VAT or Non‑VAT
              block on your invoices and official receipts.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "Accurate VAT",
                body: "Automatically calculates VATable, zero-rated, and exempt sales.",
              },
              {
                title: "BIR-ready",
                body: "VAT status controls the correct text blocks on documents.",
              },
              {
                title: "Audit protection",
                body: "Avoid VAT mismatches during audits and reviews.",
              },
              {
                title: "Flexible",
                body: "You can update this later in Settings with audit logs.",
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
            <p>VAT status affects invoice/OR templates and tax reports.</p>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 font-medium text-slate-600">
              Required
            </span>
          </div>
        </section>

        <section className="flex items-center">
          <div className="w-full rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_20px_48px_rgba(15,23,42,0.12)]">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                VAT registration
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Select the VAT status that matches your BIR registration.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-slate-200 p-4">
                <label className="flex items-start gap-3">
                  <input type="radio" name="vat" className="mt-1 h-4 w-4 accent-[#1a73e8]" defaultChecked />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">VAT-registered</p>
                    <p className="text-xs text-slate-500">
                      You charge VAT on sales and must show VAT breakdowns on documents.
                    </p>
                  </div>
                </label>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <label className="flex items-start gap-3">
                  <input type="radio" name="vat" className="mt-1 h-4 w-4 accent-[#1a73e8]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Non-VAT</p>
                    <p className="text-xs text-slate-500">
                      You do not charge VAT. The non-VAT text block will appear on documents.
                    </p>
                  </div>
                </label>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs text-slate-500">
                  Unsure? You can update VAT status later in Settings, but changes will be logged.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <a href="/onboarding/business" className="text-sm font-semibold text-slate-500">Back</a>
              <a
                href="/onboarding/series"
                className="h-11 rounded-xl bg-[#1a73e8] px-6 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(26,115,232,0.35)] transition hover:bg-[#165ec3]"
              >
                Continue
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
