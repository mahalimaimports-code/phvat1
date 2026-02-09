export default function SignUpPage() {
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
                  Compliance-First
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  PH Accounting Suite
                </p>
              </div>
            </div>
            <span className="rounded-full border border-[#1a73e8]/30 bg-[#1a73e8]/10 px-3 py-1 text-xs font-semibold text-[#1a73e8]">
              7-day trial
            </span>
          </div>

          <div className="mt-10 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Get started
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900">
              Start your compliance-first setup in minutes.
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              Create your account, register your business, and issue PH-compliant
              invoices and official receipts without worrying about audit risk.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "Guided onboarding",
                body: "Step-by-step setup for VAT status, RDO, and invoice series.",
              },
              {
                title: "Built for MSMEs",
                body: "Optimized for online sellers and micro business workflows.",
              },
              {
                title: "Secure by default",
                body: "Every change creates an immutable audit record.",
              },
              {
                title: "Messenger-ready",
                body: "Notify customers about payments and due dates.",
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
            <p>Trusted by PH MSMEs preparing for BIR compliance.</p>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 font-medium text-slate-600">
              VAT-ready
            </span>
          </div>
        </section>

        <section className="flex items-center">
          <div className="w-full rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_20px_48px_rgba(15,23,42,0.12)]">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Create your account
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Start your 7-day trial. No credit card required.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  Full name
                </label>
                <input
                  className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20"
                  placeholder="Juan Dela Cruz"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  Work email
                </label>
                <input
                  className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20"
                  placeholder="you@business.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  Password
                </label>
                <input
                  type="password"
                  className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20"
                  placeholder="Create a strong password"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  Mobile number
                </label>
                <input
                  className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20"
                  placeholder="+63 9XX XXX XXXX"
                />
                <p className="text-xs text-slate-500">
                  Used for account recovery and billing updates.
                </p>
              </div>
              <a
                href="/verify-email"
                className="flex h-11 w-full items-center justify-center rounded-xl bg-[#1a73e8] text-sm font-semibold text-white shadow-[0_12px_24px_rgba(26,115,232,0.35)] transition hover:bg-[#165ec3]"
              >
                Start free trial
              </a>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-500">
                By signing up, you agree to the Terms and Privacy Policy. We never
                claim BIR approval.
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
              <span>Already have an account?</span>
              <a href="/" className="font-semibold text-[#1a73e8]">
                Sign in
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
