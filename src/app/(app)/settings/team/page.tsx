"use client";

import { useState } from "react";
import Modal from "@/components/ui/modal";
import { downloadCsv } from "@/lib/exporters";

export default function TeamSettingsPage() {
  const [members, setMembers] = useState([
    { name: "Juan Dela Cruz", role: "Owner", email: "owner@abc.ph", lastUsed: "Feb 3, 2026" },
    { name: "Mika Santos", role: "Manager", email: "mika@abc.ph", lastUsed: "Feb 2, 2026" },
    { name: "Lara Cruz", role: "Manager", email: "lara@abc.ph", lastUsed: "Jan 28, 2026" },
  ]);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [inviteDraft, setInviteDraft] = useState({
    name: "New Member",
    role: "Manager",
    email: "new@abc.ph",
  });

  const handleExport = () => {
    downloadCsv(
      "team.csv",
      members.map((member) => ({
        name: member.name,
        role: member.role,
        email: member.email,
        lastUsed: member.lastUsed,
      })),
      ["name", "role", "email", "lastUsed"]
    );
  };

  return (
    <div className="space-y-6">
      <section className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Team & roles</h2>
          <p className="text-sm text-slate-600">Manage owners and managers.</p>
        </div>
        <button
          type="button"
          onClick={() => setInviteOpen(true)}
          className="rounded-xl bg-[#1a73e8] px-4 py-2 text-sm font-semibold text-white"
        >
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
          <button
            type="button"
            onClick={handleExport}
            className="h-10 rounded-xl border border-slate-200 px-3 text-sm font-semibold text-slate-600"
          >
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

      <Modal
        isOpen={inviteOpen}
        title="Invite team member"
        description="Add a new owner or manager to your workspace."
        onClose={() => setInviteOpen(false)}
        footer={
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setInviteOpen(false)}
              className="h-10 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                setMembers((prev) => [
                  ...prev,
                  { ...inviteDraft, lastUsed: "Invited today" },
                ]);
                setInviteOpen(false);
              }}
              className="h-10 rounded-xl bg-[#1a73e8] px-4 text-sm font-semibold text-white"
            >
              Send invite
            </button>
          </div>
        }
      >
        <div className="grid grid-cols-1 gap-4 text-sm text-slate-600 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Name
            </label>
            <input
              value={inviteDraft.name}
              onChange={(event) => setInviteDraft({ ...inviteDraft, name: event.target.value })}
              className="h-11 w-full rounded-xl border border-slate-200 px-3"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Role
            </label>
            <select
              value={inviteDraft.role}
              onChange={(event) => setInviteDraft({ ...inviteDraft, role: event.target.value })}
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3"
            >
              <option>Owner</option>
              <option>Manager</option>
            </select>
          </div>
          <div className="space-y-2 sm:col-span-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Email
            </label>
            <input
              value={inviteDraft.email}
              onChange={(event) => setInviteDraft({ ...inviteDraft, email: event.target.value })}
              className="h-11 w-full rounded-xl border border-slate-200 px-3"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
