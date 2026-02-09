import DemoActionButton from "@/components/ui/demo-action-button";

export default function VoidDocumentPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Void document</h2>
        <p className="text-sm text-slate-600">
          Voiding preserves audit history and keeps numbering intact.
        </p>
      </section>

      <section className="rounded-2xl border border-rose-200 bg-white p-6 shadow-sm">
        <div className="rounded-xl border border-rose-100 bg-rose-50 p-4 text-sm text-rose-700">
          This action cannot be undone. A voided document remains in your audit trail.
        </div>
        <div className="mt-6 space-y-3">
          <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
            Reason for voiding
          </label>
          <textarea className="min-h-[120px] w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" placeholder="Provide a reason" />
          <p className="text-xs text-slate-500">
            We will stamp the reason on the void record for compliance.
          </p>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <DemoActionButton
            message="Demo: cancel void action."
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600"
          >
            Cancel
          </DemoActionButton>
          <DemoActionButton
            message="Demo: confirm void."
            className="rounded-xl bg-rose-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Confirm void
          </DemoActionButton>
        </div>
      </section>
    </div>
  );
}
