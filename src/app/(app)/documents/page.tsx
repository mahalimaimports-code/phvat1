const docs = [
  {
    id: "INV-1042",
    type: "Invoice",
    customer: "Luna Retail",
    amount: "₱5,040.00",
    status: "Paid",
  },
  {
    id: "OR-5821",
    type: "Official Receipt",
    customer: "SariHub",
    amount: "₱1,250.00",
    status: "Pending",
  },
  {
    id: "INV-1041",
    type: "Invoice",
    customer: "Bituin Co.",
    amount: "₱9,800.00",
    status: "Overdue",
  },
];

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <section className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Documents</h2>
          <p className="text-sm text-slate-600">
            Manage invoices, official receipts, and credit notes.
          </p>
        </div>
        <a
          href="/documents/new"
          className="rounded-xl bg-[#1a73e8] px-4 py-2 text-sm font-semibold text-white"
        >
          Create document
        </a>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <input
            className="h-10 w-full max-w-xs rounded-xl border border-slate-200 px-3 text-sm"
            placeholder="Search by ID or customer"
          />
          <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm">
            <option>All types</option>
            <option>Invoice</option>
            <option>Official Receipt</option>
            <option>Credit Note</option>
          </select>
          <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm">
            <option>Status</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Overdue</option>
          </select>
        </div>

        <div className="mt-6 space-y-3">
          {docs.map((doc) => (
            <div
              key={doc.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">{doc.id}</p>
                <p className="text-xs text-slate-500">{doc.type}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{doc.customer}</p>
                <p className="text-xs text-slate-500">{doc.status}</p>
              </div>
              <p className="text-sm font-semibold text-slate-900">{doc.amount}</p>
              <a href={`/documents/${doc.id}`} className="text-xs font-semibold text-[#1a73e8]">
                View
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
