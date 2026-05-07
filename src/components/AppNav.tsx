import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

type AppNavProps = {
  isSignedIn: boolean;
};

export function AppNav({ isSignedIn }: AppNavProps) {
  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
      <BrandMark />
      <div className="flex items-center gap-2">
        {isSignedIn ? (
          <Link
            href="/dashboard"
            className="rounded-md bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2"
          >
            Dashboard
          </Link>
        ) : (
          <>
            <Link
              href="/login"
              className="rounded-md px-3 py-2.5 text-sm font-semibold text-zinc-700 transition hover:bg-white hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2"
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="rounded-md bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
