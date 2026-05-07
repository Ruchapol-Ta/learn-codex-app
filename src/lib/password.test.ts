import { describe, expect, it } from "vitest";
import { hashPassword, verifyPassword } from "./password";

describe("password helpers", () => {
  it("hashes passwords and verifies the original value", async () => {
    const password = "password123";
    const passwordHash = await hashPassword(password);

    expect(passwordHash).not.toBe(password);
    expect(await verifyPassword(password, passwordHash)).toBe(true);
  });

  it("rejects an incorrect password", async () => {
    const passwordHash = await hashPassword("password123");

    expect(await verifyPassword("wrong-password", passwordHash)).toBe(false);
  });
});
