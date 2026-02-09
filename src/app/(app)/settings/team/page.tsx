const members = [
  { name: "Juan Dela Cruz", role: "Owner", email: "owner@abc.ph", lastUsed: "Feb 3, 2026" },
  { name: "Mika Santos", role: "Manager", email: "mika@abc.ph", lastUsed: "Feb 2, 2026" },
  { name: "Lara Cruz", role: "Manager", email: "lara@abc.ph", lastUsed: "Jan 28, 2026" },
];

export default function TeamSettingsPage() {
  return (
    <div className="space-y-6">
      <section className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Team & roles</h2>
          <p className="text-sm text-slate-600">Manage owners and managers.</p>
        </div>
        <button className="rounded-xl bg-[#1a73e8] px-4 py-2 text-sm font-semibold text-white">
          Invite member
        </button>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <input className="h-10 w-full max-w-xs rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700" placeholder="Search team" />
            <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>Role</option>
              <option>Owner</option>
              <option>Manager</option>
            </select>
            <select className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700">
              <option>Sort by</option>
              <option>Name (A-Z)</option>
              <option>Last usage (recent)</option>
              <option>Last usage (oldest)</option>
            </select>
          </div>
          <button className="h-10 rounded-xl border border-slate-200 px-3 text-sm font-semibold text-slate-600">
            Export
          </button>
        </div>

        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          Owners can manage billing and compliance settings. Managers can issue documents.
        </div>

        <div className="mt-6 space-y-3">
          {members.map((member) => (
            <div key={member.email} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">{member.name}</p>
                <p className="text-xs text-slate-500">{member.email}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500">Last used: {member.lastUsed}</p>
                <span className="mt-1 inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
