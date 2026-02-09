export default function SetupCompletePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7faff] via-[#f9fbff] to-white text-slate-900">
      <main className="mx-auto flex min-h-screen max-w-[920px] flex-col items-center justify-center px-6 py-16">
        <div className="w-full rounded-3xl border border-slate-200/70 bg-white p-10 text-center shadow-[0_20px_48px_rgba(15,23,42,0.12)]">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#1a73e8] text-xl font-semibold text-white">
            PH
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Setup complete
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900">
            Your workspace is ready.
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            We have configured your business profile, VAT status, and document
            series. You are now ready to issue compliant invoices and ORs.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
            {["Create your first transaction", "Add customers and items", "Connect Messenger alerts", "Review billing status"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm font-semibold text-slate-900">{item}</p>
                </div>
              )
            )}
          </div>

          <a
            href="/dashboard"
            className="mt-8 flex h-11 w-full items-center justify-center rounded-xl bg-[#1a73e8] text-sm font-semibold text-white shadow-[0_12px_24px_rgba(26,115,232,0.35)] transition hover:bg-[#165ec3]"
          >
            Go to dashboard
          </a>
          <p className="mt-4 text-xs text-slate-500">
            Trial ends in 7 days. Upgrade anytime in Billing.
          </p>
        </div>
      </main>
    </div>
  );
}
