import { redirect } from "next/navigation";
import { BrandMark } from "@/components/BrandMark";
import { signOut, auth } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const displayName = session.user.name || session.user.email || "User";
  const initials = displayName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef6f6_100%)] text-zinc-950">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <BrandMark />
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button
            type="submit"
            className="h-10 rounded-md border border-zinc-300 bg-white px-4 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-zinc-400 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2"
          >
            Sign out
          </button>
        </form>
      </nav>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 pb-16 pt-6 sm:px-8">
        <header className="rounded-xl border border-white/80 bg-white/85 p-6 shadow-lg shadow-zinc-900/5 ring-1 ring-zinc-900/5">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
            <div className="flex items-center gap-4">
              <div className="grid size-14 shrink-0 place-items-center rounded-lg bg-cyan-900 text-lg font-bold text-white shadow-sm">
                {initials}
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-800">
                  Dashboard
                </p>
                <h1 className="mt-1 text-3xl font-semibold tracking-tight text-zinc-950">
                  Welcome back, {displayName}
                </h1>
              </div>
            </div>
            <div className="grid gap-1 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm">
              <span className="font-semibold text-emerald-800">
                Session active
              </span>
              <span className="text-emerald-700">Protected route verified</span>
            </div>
          </div>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Auth provider", "Credentials", "NextAuth"],
            ["Database", "SQLite", "Prisma"],
            ["Tests", "6 passing", "Vitest"],
          ].map(([label, value, meta]) => (
            <div
              key={label}
              className="rounded-lg border border-white/80 bg-white/85 p-5 shadow-sm ring-1 ring-zinc-900/5"
            >
              <p className="text-sm font-semibold text-zinc-500">{label}</p>
              <p className="mt-3 text-2xl font-semibold text-zinc-950">
                {value}
              </p>
              <p className="mt-1 text-sm text-zinc-500">{meta}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
          <section className="rounded-xl border border-white/80 bg-white/85 p-6 shadow-sm ring-1 ring-zinc-900/5">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-950">
                  Account details
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  Current authenticated profile
                </p>
              </div>
              <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                User
              </span>
            </div>

            <dl className="mt-5 grid gap-4">
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4">
                <dt className="text-sm font-semibold text-zinc-500">User ID</dt>
                <dd className="mt-2 break-all font-mono text-sm text-zinc-950">
                  {session.user.id}
                </dd>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4">
                <dt className="text-sm font-semibold text-zinc-500">Email</dt>
                <dd className="mt-2 text-sm font-medium text-zinc-950">
                  {session.user.email}
                </dd>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4">
                <dt className="text-sm font-semibold text-zinc-500">Name</dt>
                <dd className="mt-2 text-sm font-medium text-zinc-950">
                  {session.user.name || "Not provided"}
                </dd>
              </div>
            </dl>
          </section>

          <aside className="grid gap-4">
            <section className="rounded-xl border border-zinc-900 bg-zinc-950 p-5 text-white shadow-lg shadow-zinc-900/10">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
                Security
              </p>
              <h2 className="mt-3 text-xl font-semibold">Credential session</h2>
              <div className="mt-5 grid gap-3">
                {["Password hash stored", "Session token active", "Route guard enabled"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-md bg-white/10 px-4 py-3 text-sm font-semibold text-zinc-100"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </section>

            <section className="rounded-xl border border-white/80 bg-white/85 p-5 shadow-sm ring-1 ring-zinc-900/5">
              <h2 className="text-lg font-semibold text-zinc-950">
                Recent activity
              </h2>
              <div className="mt-4 grid gap-3">
                {[
                  ["Signed in", "Credentials provider"],
                  ["Session checked", "Dashboard route"],
                  ["Profile loaded", "Prisma user record"],
                ].map(([title, detail]) => (
                  <div
                    key={title}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3"
                  >
                    <p className="text-sm font-semibold text-zinc-950">
                      {title}
                    </p>
                    <p className="mt-1 text-xs font-medium text-zinc-500">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
