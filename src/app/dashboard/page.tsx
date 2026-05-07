import { redirect } from "next/navigation";
import { signOut, auth } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10">
      <section className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <header className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Dashboard
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-zinc-950">
              Hello, {session.user.name || session.user.email}
            </h1>
          </div>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button
              type="submit"
              className="h-10 rounded-md border border-zinc-300 bg-white px-4 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
            >
              Sign out
            </button>
          </form>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-zinc-200 bg-white p-5">
            <p className="text-sm font-medium text-zinc-500">User ID</p>
            <p className="mt-2 break-all font-mono text-sm text-zinc-950">
              {session.user.id}
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-5">
            <p className="text-sm font-medium text-zinc-500">Email</p>
            <p className="mt-2 text-sm text-zinc-950">{session.user.email}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
