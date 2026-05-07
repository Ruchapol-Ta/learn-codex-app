import Link from "next/link";
import { auth } from "@/lib/auth";
import { AppNav } from "@/components/AppNav";

export default async function Home() {
  const session = await auth();

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef6f6_100%)] text-zinc-950">
      <AppNav isSignedIn={Boolean(session?.user)} />

      <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-800">
            Next.js authentication workspace
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
            A sharper starting point for secure product flows.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
            Register users, sign in with protected credentials, and continue
            building from a clean Prisma and SQLite foundation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={session?.user ? "/dashboard" : "/register"}
              className="inline-flex h-12 items-center justify-center rounded-md bg-zinc-950 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2"
            >
              {session?.user ? "Open dashboard" : "Create account"}
            </Link>
            <Link
              href={session?.user ? "/dashboard" : "/login"}
              className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-300 bg-white px-5 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-zinc-400 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2"
            >
              {session?.user ? "View session" : "Sign in"}
            </Link>
          </div>

          <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
            {[
              ["Auth", "NextAuth"],
              ["Database", "SQLite"],
              ["ORM", "Prisma"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-lg border border-white/80 bg-white/80 p-4 shadow-sm ring-1 ring-zinc-900/5"
              >
                <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {label}
                </dt>
                <dd className="mt-2 text-sm font-semibold text-zinc-950 sm:text-base">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-xl border border-white/80 bg-white/85 p-5 shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5">
          <div className="rounded-lg border border-zinc-200 bg-zinc-950 p-5 text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">
                  Session status
                </p>
                <p className="mt-1 text-lg font-semibold">
                  {session?.user ? "Authenticated" : "Ready for sign in"}
                </p>
              </div>
              <span className="rounded-md bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                Secure
              </span>
            </div>

            <div className="mt-5 grid gap-3">
              {[
                ["Credentials provider", "Configured"],
                ["Password hashing", "bcryptjs"],
                ["Protected dashboard", "Active"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-md bg-white/7 px-4 py-3"
                >
                  <span className="text-sm text-zinc-300">{label}</span>
                  <span className="text-sm font-semibold text-white">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
