export function BoxLabel({ children }: { children: string }) {
  return (
    <p className="w-fit bg-accent px-5 py-2.5 font-body text-sm font-medium uppercase tracking-[0.16em] text-accent-ink">
      {children}
    </p>
  );
}
