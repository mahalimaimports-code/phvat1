"use client";

import { useState } from "react";
import FileImportButton from "@/components/ui/file-import-button";
import Modal from "@/components/ui/modal";

export default function TemplatesSettingsPage() {
  const [isTemplateOpen, setIsTemplateOpen] = useState(false);
  const [isBrandingOpen, setIsBrandingOpen] = useState(false);
  const [isEmailsOpen, setIsEmailsOpen] = useState(false);
  const [templateName, setTemplateName] = useState("Default template");
  const [templateNote, setTemplateNote] = useState("VAT/Non-VAT blocks enabled");
  const [branding, setBranding] = useState({
    logo: "mahalima-logo.png",
    vat: "009-482-771-000",
    color: "#1A73E8",
  });
  const [emails, setEmails] = useState([
    { name: "Payment reminder", enabled: true },
    { name: "Statement delivery", enabled: true },
  ]);
  const [lastImport, setLastImport] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Templates & branding</h2>
        <p className="text-sm text-slate-600">Customize invoice and OR appearance.</p>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-900">{templateName}</h3>
            <button
              type="button"
              onClick={() => setIsTemplateOpen(true)}
              className="text-xs font-semibold text-[#1a73e8]"
            >
              Edit
            </button>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Includes VAT/Non-VAT text blocks, RDO, ATP, and PTU fields.
          </p>
          <div className="mt-4 h-48 rounded-xl border border-dashed border-slate-200 bg-slate-50" />
          <p className="mt-3 text-xs text-slate-500">{templateNote}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Branding</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p>Logo: {branding.logo} (required)</p>
            <p>VAT number: {branding.vat} (required)</p>
            <p>Primary color: {branding.color}</p>
          </div>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            {emails.map((email) => (
              <p key={email.name}>
                Email template: {email.name} ({email.enabled ? "enabled" : "disabled"})
              </p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setIsBrandingOpen(true)}
              className="h-10 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600"
            >
              Update branding
            </button>
            <button
              type="button"
              onClick={() => setIsEmailsOpen(true)}
              className="h-10 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600"
            >
              Manage email templates
            </button>
            <FileImportButton
              label="Import template (Excel)"
              accept=".csv,.xlsx"
              className="h-10 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600"
              onImported={(file) => setLastImport(file.name)}
            />
          </div>
          {lastImport ? (
            <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs text-emerald-700">
              Imported file: {lastImport}
            </div>
          ) : null}
        </div>
      </section>

      <Modal
        isOpen={isTemplateOpen}
        title="Edit template"
        description="Update the default document template settings."
        onClose={() => setIsTemplateOpen(false)}
        footer={
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsTemplateOpen(false)}
              className="h-10 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => setIsTemplateOpen(false)}
              className="h-10 rounded-xl bg-[#1a73e8] px-4 text-sm font-semibold text-white"
            >
              Save template
            </button>
          </div>
        }
      >
        <div className="space-y-4 text-sm text-slate-600">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Template name
            </label>
            <input
              value={templateName}
              onChange={(event) => setTemplateName(event.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 px-3"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Notes
            </label>
            <textarea
              value={templateNote}
              onChange={(event) => setTemplateNote(event.target.value)}
              className="min-h-[90px] w-full rounded-xl border border-slate-200 px-3 py-2"
            />
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isBrandingOpen}
        title="Update branding"
        description="Change logo, VAT number, and brand colors."
        onClose={() => setIsBrandingOpen(false)}
        footer={
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsBrandingOpen(false)}
              className="h-10 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => setIsBrandingOpen(false)}
              className="h-10 rounded-xl bg-[#1a73e8] px-4 text-sm font-semibold text-white"
            >
              Save branding
            </button>
          </div>
        }
      >
        <div className="grid grid-cols-1 gap-4 text-sm text-slate-600 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Logo file
            </label>
            <input
              value={branding.logo}
              onChange={(event) => setBranding({ ...branding, logo: event.target.value })}
              className="h-11 w-full rounded-xl border border-slate-200 px-3"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              VAT number
            </label>
            <input
              value={branding.vat}
              onChange={(event) => setBranding({ ...branding, vat: event.target.value })}
              className="h-11 w-full rounded-xl border border-slate-200 px-3"
            />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Primary color
            </label>
            <input
              value={branding.color}
              onChange={(event) => setBranding({ ...branding, color: event.target.value })}
              className="h-11 w-full rounded-xl border border-slate-200 px-3"
            />
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isEmailsOpen}
        title="Manage email templates"
        description="Enable or disable automated email templates."
        onClose={() => setIsEmailsOpen(false)}
        footer={
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsEmailsOpen(false)}
              className="h-10 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600"
            >
              Close
            </button>
          </div>
        }
      >
        <div className="space-y-3 text-sm text-slate-600">
          {emails.map((email) => (
            <label key={email.name} className="flex items-center justify-between">
              <span>{email.name}</span>
              <input
                type="checkbox"
                checked={email.enabled}
                onChange={(event) =>
                  setEmails((prev) =>
                    prev.map((entry) =>
                      entry.name === email.name
                        ? { ...entry, enabled: event.target.checked }
                        : entry
                    )
                  )
                }
              />
            </label>
          ))}
        </div>
      </Modal>
    </div>
  );
}
