type EmptyStateProps = {
  title: string;
  description: string;
  action?: { label: string; href: string };
};

export default function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-2 text-xs text-slate-500">{description}</p>
      {action ? (
        <a
          href={action.href}
          className="mt-4 inline-flex h-10 items-center rounded-xl bg-[#1a73e8] px-4 text-xs font-semibold text-white"
        >
          {action.label}
        </a>
      ) : null}
    </div>
  );
}
