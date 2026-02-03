"use client";

import { usePathname } from "next/navigation";

export type NavItem = {
  label: string;
  href: string;
};

export default function SidebarNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="mt-4 space-y-2 text-sm">
      {items.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <a
            key={item.label}
            href={item.href}
            className={
              "flex items-center justify-between rounded-xl px-3 py-2 text-[0.95rem] font-semibold tracking-tight transition " +
              (isActive
                ? "bg-[#1a73e8]/10 text-[#1a73e8]"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-900")
            }
          >
            <span>{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
