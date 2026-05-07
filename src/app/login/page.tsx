import { Suspense } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { AuthShell } from "@/components/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";

export default async function LoginPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Sign in and continue your workspace."
      description="Use your credentials to access the protected dashboard and keep building from the authenticated app shell."
    >
      <section>
        <div className="mb-7">
          <h2 className="text-2xl font-semibold text-zinc-950">Sign in</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Enter the account details you used when registering.
          </p>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </section>
    </AuthShell>
  );
}
