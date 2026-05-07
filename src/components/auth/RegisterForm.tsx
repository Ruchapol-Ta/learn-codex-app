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
      <label className="grid gap-2 text-sm font-medium text-zinc-800">
        Name
        <input
          name="name"
          type="text"
          autoComplete="name"
          className="h-11 rounded-md border border-zinc-300 bg-white px-3 text-base outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-zinc-800">
        Email
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          className="h-11 rounded-md border border-zinc-300 bg-white px-3 text-base outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-zinc-800">
        Password
        <input
          name="password"
          type="password"
          autoComplete="new-password"
          minLength={8}
          required
          className="h-11 rounded-md border border-zinc-300 bg-white px-3 text-base outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
        />
      </label>
      {state.error ? (
        <p className="text-sm font-medium text-red-600">{state.error}</p>
      ) : null}
      <button
        type="submit"
        disabled={isPending}
        className="h-11 rounded-md bg-zinc-950 px-4 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Creating account..." : "Create account"}
      </button>
      <p className="text-center text-sm text-zinc-600">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-zinc-950">
          Sign in
        </Link>
      </p>
    </form>
  );
}
