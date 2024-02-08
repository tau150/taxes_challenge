import { test as base } from "@playwright/test";

export const test = base.extend({
  webApp: async ({ page }, use) => {
    await page.goto("/");
    await page.getByRole("textbox", { name: "email" }).fill("testuser@mail.com");
    await page.getByRole("textbox", { name: "password" }).fill("123456");
    await page.getByRole("button", { name: "send" }).click();
    await use(page);
  },
});

export { expect } from "@playwright/test";
