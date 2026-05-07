import { describe, expect, it } from "vitest";
import { validateRegisterForm } from "./auth-validation";

function formDataFrom(values: Record<string, string>) {
  const formData = new FormData();

  for (const [key, value] of Object.entries(values)) {
    formData.set(key, value);
  }

  return formData;
}

describe("validateRegisterForm", () => {
  it("normalizes valid register input", () => {
    const result = validateRegisterForm(
      formDataFrom({
        name: "  Rucha  ",
        email: "  USER@Example.COM  ",
        password: "password123",
      }),
    );

    expect(result).toEqual({
      ok: true,
      data: {
        name: "Rucha",
        email: "user@example.com",
        password: "password123",
      },
    });
  });

  it("uses null for an empty optional name", () => {
    const result = validateRegisterForm(
      formDataFrom({
        name: "   ",
        email: "user@example.com",
        password: "password123",
      }),
    );

    expect(result).toEqual({
      ok: true,
      data: {
        name: null,
        email: "user@example.com",
        password: "password123",
      },
    });
  });

  it("rejects missing credentials", () => {
    const result = validateRegisterForm(formDataFrom({ email: "", password: "" }));

    expect(result).toEqual({
      ok: false,
      error: "Email and password are required.",
    });
  });

  it("rejects short passwords", () => {
    const result = validateRegisterForm(
      formDataFrom({
        email: "user@example.com",
        password: "short",
      }),
    );

    expect(result).toEqual({
      ok: false,
      error: "Password must be at least 8 characters.",
    });
  });
});
