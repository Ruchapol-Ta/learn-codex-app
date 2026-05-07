"use client";

import Link from "next/link";
import { useActionState } from "react";
import { registerUser, type RegisterState } from "@/app/register/actions";

const initialState: RegisterState = {};

export function RegisterForm() {
  const [state, formAction, isPending] = useActionState(
    registerUser,
    initialState,
  );

  return (
    <form action={formAction} className="grid gap-5">
      <label className="grid gap-2 text-sm font-semibold text-zinc-800">
        Name
        <input
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Rucha Pol"
          className="h-12 rounded-md border border-zinc-300 bg-white px-3 text-base text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-cyan-800 focus:ring-3 focus:ring-cyan-900/10"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-zinc-800">
        Email
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          className="h-12 rounded-md border border-zinc-300 bg-white px-3 text-base text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-cyan-800 focus:ring-3 focus:ring-cyan-900/10"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-zinc-800">
        Password
        <input
          name="password"
          type="password"
          autoComplete="new-password"
          minLength={8}
          required
          placeholder="At least 8 characters"
          className="h-12 rounded-md border border-zinc-300 bg-white px-3 text-base text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-cyan-800 focus:ring-3 focus:ring-cyan-900/10"
        />
      </label>
      {state.error ? (
        <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">
          {state.error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={isPending}
        className="h-12 rounded-md bg-zinc-950 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Creating account..." : "Create account"}
      </button>
      <p className="text-center text-sm text-zinc-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-cyan-800 transition hover:text-cyan-950"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
}
