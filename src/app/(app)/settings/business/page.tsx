import { businessProfile } from "@/data/demo";
import DemoActionButton from "@/components/ui/demo-action-button";

export default function BusinessSettingsPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Business profile</h2>
        <p className="text-sm text-slate-600">Maintain BIR-required fields.</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          These fields print on invoices/official receipts and must match your BIR records.
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Business name</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" defaultValue={businessProfile.name} />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Business email</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" defaultValue="hello@mahalima.ph" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">TIN</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" defaultValue={businessProfile.tin} />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Business registration date</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" defaultValue="Jan 12, 2022" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">RDO Code</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" defaultValue={businessProfile.rdo} />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">ATP Number</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" defaultValue={businessProfile.atp} />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">PTU Number</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" defaultValue={businessProfile.ptu} />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Website</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" defaultValue="https://mahalima.ph" />
          </div>
          <div className="sm:col-span-2 space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Business address</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" defaultValue={businessProfile.address} />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Contact person</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" defaultValue="Mika Santos" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Contact details</label>
            <input className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm" defaultValue="+63 917 221 4401" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">VAT Status</label>
            <select className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm">
              <option>{businessProfile.vatStatus}</option>
              <option>Non-VAT</option>
            </select>
          </div>
          <div className="sm:col-span-2 space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">VAT text block</label>
            <textarea className="min-h-[100px] w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" defaultValue="THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAX" />
          </div>
          <div className="sm:col-span-2 space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Non-VAT text block</label>
            <textarea className="min-h-[100px] w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" defaultValue="THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAX" />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <DemoActionButton
            message="Demo: discard business profile changes."
            className="text-sm font-semibold text-slate-500"
          >
            Cancel
          </DemoActionButton>
          <DemoActionButton
            message="Demo: save business profile changes."
            className="h-11 rounded-xl bg-[#1a73e8] px-6 text-sm font-semibold text-white"
          >
            Save changes
          </DemoActionButton>
        </div>
      </section>
    </div>
  );
}
