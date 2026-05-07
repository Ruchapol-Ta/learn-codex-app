export type RegisterInput = {
  name: string | null;
  email: string;
  password: string;
};

export type RegisterValidationResult =
  | {
      ok: true;
      data: RegisterInput;
    }
  | {
      ok: false;
      error: string;
    };

export function validateRegisterForm(formData: FormData): RegisterValidationResult {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { ok: false, error: "Email and password are required." };
  }

  if (password.length < 8) {
    return { ok: false, error: "Password must be at least 8 characters." };
  }

  return {
    ok: true,
    data: {
      name: name || null,
      email,
      password,
    },
  };
}
