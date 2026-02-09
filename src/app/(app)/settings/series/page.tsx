"use client";

import { useState } from "react";
import Modal from "@/components/ui/modal";

export default function SeriesSettingsPage() {
  const [seriesList, setSeriesList] = useState([
    { label: "Invoice", prefix: "INV-", current: 1042 },
    { label: "Official Receipt", prefix: "OR-", current: 5821 },
    { label: "Credit Note", prefix: "CN-", current: 142 },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(seriesList[0]);
  const [editIndex, setEditIndex] = useState(0);

  const openEdit = (index: number) => {
    setEditIndex(index);
    setDraft(seriesList[index]);
    setIsEditing(true);
  };

  const openAdd = () => {
    setEditIndex(-1);
    setDraft({ label: "", prefix: "", current: 1 });
    setIsEditing(true);
  };

  const saveSeries = () => {
    if (editIndex >= 0) {
      setSeriesList((prev) =>
        prev.map((item, idx) => (idx === editIndex ? draft : item))
      );
    } else {
      setSeriesList((prev) => [...prev, draft]);
    }
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">Invoice/OR series</h2>
        <p className="text-sm text-slate-600">Manage numbering and prefixes.</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          Changing series affects future documents only. Historical records remain unchanged.
        </div>
        <div className="space-y-4">
          {seriesList.map((entry, index) => (
            <div key={entry.label} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">{entry.label}</p>
                <button
                  type="button"
                  onClick={() => openEdit(index)}
                  className="text-xs font-semibold text-[#1a73e8]"
                >
                  Edit
                </button>
              </div>
              <p className="text-xs text-slate-500">
                Prefix: {entry.prefix} · Current: {entry.current}
              </p>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={openAdd}
          className="mt-6 h-10 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600"
        >
          Add series
        </button>
      </section>

      <Modal
        isOpen={isEditing}
        title={editIndex >= 0 ? "Edit series" : "Add series"}
        description="Update numbering for future documents."
        onClose={() => setIsEditing(false)}
        footer={
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="h-10 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={saveSeries}
              className="h-10 rounded-xl bg-[#1a73e8] px-4 text-sm font-semibold text-white"
            >
              Save series
            </button>
          </div>
        }
      >
        <div className="grid grid-cols-1 gap-4 text-sm text-slate-600 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Series label
            </label>
            <input
              value={draft.label}
              onChange={(event) => setDraft({ ...draft, label: event.target.value })}
              className="h-11 w-full rounded-xl border border-slate-200 px-3"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Prefix
            </label>
            <input
              value={draft.prefix}
              onChange={(event) => setDraft({ ...draft, prefix: event.target.value })}
              className="h-11 w-full rounded-xl border border-slate-200 px-3"
            />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Current number
            </label>
            <input
              type="number"
              value={draft.current}
              onChange={(event) =>
                setDraft({ ...draft, current: Number(event.target.value) })
              }
              className="h-11 w-full rounded-xl border border-slate-200 px-3"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
