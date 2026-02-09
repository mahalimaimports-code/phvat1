export default function TemplatesSettingsPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Templates & branding</h2>
        <p className="text-sm text-slate-600">Customize invoice and OR appearance.</p>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-900">Default template</h3>
            <button className="text-xs font-semibold text-[#1a73e8]">Edit</button>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Includes VAT/Non-VAT text blocks, RDO, ATP, and PTU fields.
          </p>
          <div className="mt-4 h-48 rounded-xl border border-dashed border-slate-200 bg-slate-50" />
          <p className="mt-3 text-xs text-slate-500">Template preview placeholder.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Branding</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p>Logo: mahalima-logo.png (required)</p>
            <p>VAT number: 009-482-771-000 (required)</p>
            <p>Primary color: #1A73E8</p>
          </div>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p>Email template: Payment reminder (enabled)</p>
            <p>Email template: Statement delivery (enabled)</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <button className="h-10 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600">
              Update branding
            </button>
            <button className="h-10 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600">
              Manage email templates
            </button>
            <button className="h-10 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600">
              Import template (Excel)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
