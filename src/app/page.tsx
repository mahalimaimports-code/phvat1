"use client";

import { useMemo, useState } from "react";
import ThemePicker from "@/components/ui/theme-picker";

type Theme = {
  id: string;
  label: string;
  primary: string;
  accent: string;
  bg: string;
};

const defaultTheme: Theme = {
  id: "google",
  label: "Google Blue",
  primary: "#1a73e8",
  accent: "#0b57d0",
  bg: "#f7faff",
};

export default function Home() {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const themeStyles = useMemo(
    () => ({
      "--brand": theme.primary,
      "--brand-strong": theme.accent,
      "--brand-bg": theme.bg,
    }) as React.CSSProperties,
    [theme]
  );

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[var(--brand-bg)] via-[#f9fbff] to-white text-slate-900"
      style={themeStyles}
    >
      <main className="mx-auto grid min-h-screen max-w-[1200px] grid-cols-1 gap-10 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-12">
        <section className="flex flex-col justify-between rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl text-sm font-semibold text-white" style={{ background: "var(--brand)" }}>
                PH
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Compliance-First
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  PH Accounting Suite
                </p>
              </div>
            </div>
            <a
              href="/about"
              className="rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold text-slate-600"
            >
              About
            </a>
          </div>

          <div className="mt-10 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Home
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900">
              Stay audit-safe with every sale, not just at tax time.
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              Built for PH MSMEs with VAT-aware entries, gap-free invoice/OR numbering,
              and audit-proof trails. Designed to prevent BIR issues before they happen.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Theme
            </p>
            <ThemePicker onChange={setTheme} />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "VAT-aware entries",
                body: "Automatic VAT breakdown for standard, zero-rated, and exempt sales.",
              },
              {
                title: "Sequence integrity",
                body: "Invoice and OR numbering enforced at issuance with no gaps.",
              },
              {
                title: "Audit trail",
                body: "Voids and credit notes preserve the audit trail by design.",
              },
              {
                title: "Messenger alerts",
                body: "Send payment reminders and due notices via Messenger.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-900">Business & Clients Reference</h3>
              <span className="text-xs text-slate-500">Sample portfolio</span>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Mahalima Imports Trading",
                "Luna Retail Ventures",
                "SariHub Online Store",
                "Bituin Co. Ltd.",
              ].map((name) => (
                <div
                  key={name}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between text-xs text-slate-500">
            <p>VAT-ready templates, BIR fields, and 10-year retention support.</p>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 font-medium text-slate-600">
              PH-compliant
            </span>
          </div>
        </section>

        <section className="flex items-center">
          <div className="w-full rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_20px_48px_rgba(15,23,42,0.12)]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Welcome back
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Sign in to access your dashboard, invoices, and reports.
                </p>
              </div>
              <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                Secure login
              </div>
            </div>

            <div className="mt-8 space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  Email
                </label>
                <input
                  className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20"
                  placeholder="you@company.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  Password
                </label>
                <input
                  type="password"
                  className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 accent-[#1a73e8]" />
                  Remember me
                </label>
                <a href="/forgot-password" className="font-semibold text-[var(--brand)]">
                  Forgot password?
                </a>
              </div>
              <a
                href="/dashboard"
                className="flex h-11 w-full items-center justify-center rounded-xl text-sm font-semibold text-white shadow-[0_12px_24px_rgba(26,115,232,0.35)] transition"
                style={{ background: "var(--brand)" }}
              >
                Sign in
              </a>

              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="h-px flex-1 bg-slate-200" />
                or
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <a
                href="/dashboard"
                className="flex h-11 w-full items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:border-slate-300"
              >
                Continue with Google
              </a>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
              <span>New here?</span>
              <a href="/signup" className="font-semibold text-[var(--brand)]">
                Create an account
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
