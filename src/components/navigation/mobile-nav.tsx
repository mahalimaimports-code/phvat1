"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SidebarNav, { type NavItem } from "@/components/navigation/sidebar-nav";

export default function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <>
      <button
        className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white text-slate-700 lg:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
      >
        <span className="block h-0.5 w-5 bg-slate-600" />
        <span className="block h-0.5 w-5 bg-slate-600" />
        <span className="block h-0.5 w-5 bg-slate-600" />
      </button>

      {open
        ? createPortal(
            <div className="fixed inset-0 z-[9999] bg-white">
              <button
                className="absolute inset-0 h-full w-full bg-white z-0"
                onClick={() => setOpen(false)}
                aria-label="Close navigation overlay"
              />
              <div className="absolute left-0 top-0 h-full w-80 border-r border-slate-200 bg-white p-6 shadow-2xl z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#1a73e8] text-sm font-semibold text-white">
                      PH
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Customer
                      </p>
                      <p className="text-lg font-semibold text-slate-900">Suite</p>
                    </div>
                  </div>
                  <button
                    className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                </div>

                <div className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Main
                </div>
                <SidebarNav items={items} />

                <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
                  <p className="font-semibold text-slate-700">Trial: 5 days left</p>
                  <p className="mt-2">Upgrade anytime to keep issuing documents.</p>
                  <a
                    href="/billing"
                    className="mt-3 block w-full rounded-lg bg-[#1a73e8] px-3 py-2 text-center text-xs font-semibold text-white"
                  >
                    Upgrade
                  </a>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
