import { redirect } from "next/navigation";
import { AuthShell } from "@/components/AuthShell";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { auth } from "@/lib/auth";

export default async function RegisterPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <AuthShell
      eyebrow="Get started"
      title="Create an account for the protected app."
      description="Registration stores your profile in SQLite through Prisma and signs you into the workspace when setup is complete."
    >
      <section>
        <div className="mb-7">
          <h2 className="text-2xl font-semibold text-zinc-950">
            Create account
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Passwords are hashed before they are saved.
          </p>
        </div>
        <RegisterForm />
      </section>
    </AuthShell>
  );
}
