import Link from "next/link";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10">
      <section className="mx-auto flex w-full max-w-4xl flex-col gap-10">
        <nav className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <Link href="/" className="text-sm font-semibold text-zinc-950">
            Learn Codex App
          </Link>
          <div className="flex items-center gap-3">
            {session?.user ? (
              <Link
                href="/dashboard"
                className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-md px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100"
                >
                  Sign in
                </Link>
                <Link
                  href="/register"
                  className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </nav>

        <div className="grid gap-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Authentication starter
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            NextAuth, Prisma, and SQLite are ready to build on.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600">
            Create an account, sign in with credentials, and visit the protected
            dashboard route backed by a local SQLite database.
          </p>
        </div>
      </section>
    </main>
  );
}
