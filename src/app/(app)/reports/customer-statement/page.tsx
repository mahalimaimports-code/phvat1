import DemoActionButton from "@/components/ui/demo-action-button";

export default function CustomerStatementReportPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Customer statement report</h2>
        <p className="text-sm text-slate-600">Generate statements across customers.</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm">
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Annually</option>
            <option>Custom range</option>
          </select>
          <input className="h-10 rounded-xl border border-slate-200 px-3 text-sm" defaultValue="Jan 1, 2026" />
          <input className="h-10 rounded-xl border border-slate-200 px-3 text-sm" defaultValue="Feb 28, 2026" />
          <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm">
            <option>Customer</option>
            <option>Luna Retail Ventures</option>
            <option>SariHub Online Store</option>
          </select>
          <DemoActionButton
            message="Demo: generate customer statement report."
            className="h-10 rounded-xl bg-[#1a73e8] px-4 text-sm font-semibold text-white"
          >
            Generate
          </DemoActionButton>
        </div>
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          Statements include unpaid invoices, credits, and recorded payments.
        </div>
      </section>
    </div>
  );
}
