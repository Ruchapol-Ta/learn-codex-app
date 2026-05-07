import Link from "next/link";

type BrandMarkProps = {
  href?: string;
};

export function BrandMark({ href = "/" }: BrandMarkProps) {
  return (
    <Link href={href} className="group flex items-center gap-3">
      <span className="grid size-10 place-items-center rounded-lg bg-zinc-950 text-sm font-bold text-white shadow-sm ring-1 ring-zinc-900/10 transition group-hover:bg-cyan-900">
        LC
      </span>
      <span className="grid leading-tight">
        <span className="text-sm font-semibold text-zinc-950">
          Learn Codex
        </span>
        <span className="text-xs font-medium text-zinc-500">
          Auth workspace
        </span>
      </span>
    </Link>
  );
}
