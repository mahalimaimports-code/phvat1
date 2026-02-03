const members = [
  { name: "Juan Dela Cruz", role: "Owner", email: "owner@abc.ph" },
  { name: "Mika Santos", role: "Manager", email: "mika@abc.ph" },
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
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          Owners can manage billing and compliance settings. Managers can issue documents.
        </div>
        <div className="space-y-3">
          {members.map((member) => (
            <div key={member.email} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">{member.name}</p>
                <p className="text-xs text-slate-500">{member.email}</p>
              </div>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                {member.role}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
