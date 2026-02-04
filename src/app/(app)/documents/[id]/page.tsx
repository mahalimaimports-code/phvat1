import { businessProfile, documents } from "@/data/demo";

const document = documents[0];
const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(value);

export default function DocumentDetailPage() {
  return (
    <div className="space-y-6">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">{document.id}</h2>
          <p className="text-sm text-slate-600">
            {document.type} · Issued {document.issuedAt} · {document.status}
          </p>
        </div>
        <div className="flex gap-3">
          <a href="/documents/INV-1042/credit-note" className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
            Create credit note
          </a>
          <a href="/documents/INV-1042/void" className="rounded-xl bg-[#1a73e8] px-4 py-2 text-sm font-semibold text-white">
            Void document
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Document details</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p>Customer: {document.customer}</p>
            <p>Series: {document.series}</p>
            <p>Number: {document.number}</p>
            <p>VAT type: {document.vatType}</p>
            <p>Payment status: {document.status}</p>
          </div>
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
            BIR fields: RDO {businessProfile.rdo} · {businessProfile.atp} · {businessProfile.ptu}
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Summary</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(4500)}</span>
            </div>
            <div className="flex justify-between">
              <span>VAT</span>
              <span>{formatCurrency(540)}</span>
            </div>
            <div className="flex justify-between font-semibold text-slate-900">
              <span>Total</span>
              <span>{formatCurrency(document.amount)}</span>
            </div>
          </div>
          <button className="mt-6 h-10 w-full rounded-xl border border-slate-200 text-sm font-semibold text-slate-600">
            Download PDF
          </button>
        </div>
      </section>
    </div>
  );
}
