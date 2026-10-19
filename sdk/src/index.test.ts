import { describe, it, expect } from "vitest";
import { ShieldSDK } from "./index";

describe("ShieldSDK", () => {
  it("retorna null se não foi inicializado", async () => {
    expect(await ShieldSDK.getToken()).toBeNull();
  });

  it("retorna token depois do init", async () => {
    ShieldSDK.init({ apiUrl: "http://localhost:3000" });
    expect(await ShieldSDK.getToken()).toBe("token-placeholder");
  });
});
