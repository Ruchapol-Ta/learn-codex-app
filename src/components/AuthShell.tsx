import { ReactNode } from "react";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

type AuthShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function AuthShell({
  eyebrow,
  title,
  description,
  children,
}: AuthShellProps) {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#f8fafc_0%,#f6f7f9_46%,#ecfeff_100%)] px-5 py-8 text-zinc-950 sm:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col">
        <div className="flex items-center justify-between">
          <BrandMark />
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-sm font-semibold text-zinc-600 transition hover:bg-white/70 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2"
          >
            Home
          </Link>
        </div>

        <section className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1fr_420px]">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-800">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">
              {description}
            </p>

            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
              {["Encrypted passwords", "SQLite storage", "Protected routes"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/80 bg-white/70 px-4 py-3 text-sm font-semibold text-zinc-700 shadow-sm"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="rounded-xl border border-white/80 bg-white/85 p-6 shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5 backdrop-blur">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
