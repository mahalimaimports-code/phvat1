import DemoActionButton from "@/components/ui/demo-action-button";

export default function VerifyEmailPage() {
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
              Secure setup
            </span>
          </div>

          <div className="mt-10 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Secure access
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900">
              Verify your email to continue.
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              We sent a verification link to your inbox. This keeps your account
              secure and ensures official receipts and invoices stay compliant.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "Secure identity",
                body: "Protects your business data and audit trail access.",
              },
              {
                title: "Trusted records",
                body: "Verified contact info is required for BIR-ready documents.",
              },
              {
                title: "Easy recovery",
                body: "Recover access quickly if you ever lose your password.",
              },
              {
                title: "Team ready",
                body: "Invite managers once your account is verified.",
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
            <p>Need help? Our team can verify your account in minutes.</p>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 font-medium text-slate-600">
              Step 1 of 4
            </span>
          </div>
        </section>

        <section className="flex items-center">
          <div className="w-full rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_20px_48px_rgba(15,23,42,0.12)]">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Check your inbox
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                We sent a verification link to <span className="font-semibold text-slate-800">you@business.com</span>.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-600">
                  Didn’t receive the email? Check spam or request a new link.
                </p>
              </div>
              <DemoActionButton
                message="Demo: resend verification email."
                className="h-11 w-full rounded-xl bg-[#1a73e8] text-sm font-semibold text-white shadow-[0_12px_24px_rgba(26,115,232,0.35)] transition hover:bg-[#165ec3]"
              >
                Resend verification email
              </DemoActionButton>
              <DemoActionButton
                message="Demo: change email address."
                className="h-11 w-full rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:border-[#1a73e8] hover:text-[#1a73e8]"
              >
                Change email address
              </DemoActionButton>
            </div>

            <div className="mt-6 text-xs text-slate-500">
              Already verified? <a href="/onboarding/business" className="font-semibold text-[#1a73e8]">Continue setup</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
