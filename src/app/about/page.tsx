export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7faff] via-[#f9fbff] to-white text-slate-900">
      <main className="mx-auto max-w-[920px] px-6 py-16">
        <div className="rounded-3xl border border-slate-200/70 bg-white p-10 shadow-[0_20px_48px_rgba(15,23,42,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            About
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900">
            Compliance-first accounting built for PH MSMEs.
          </h1>
          <p className="mt-4 text-sm text-slate-600">
            We designed this platform to help micro businesses stay audit-safe without
            complicated accounting workflows. VAT-aware entries, gap-free document
            numbering, and immutable audit trails reduce compliance risk from day one.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "Behavior-first compliance",
                body: "We prevent errors at entry, not after the fact.",
              },
              {
                title: "PH-ready rules",
                body: "Templates align to BIR fields and VAT categories.",
              },
              {
                title: "Audit trails",
                body: "Voids and credit notes preserve document history.",
              },
              {
                title: "Built for MSMEs",
                body: "Simple daily workflows with professional reporting.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
