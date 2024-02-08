import { test, expect } from "./config/test";

test("has expected UI", async ({ webApp }) => {
  await expect(webApp.getByRole("heading", { name: /tax season 2021/i })).toBeVisible();
});

test("redirect to create submission page", async ({ webApp }) => {
  const button = await webApp.getByTestId("create-submission-button-2021");

  await button.click();

  await expect(webApp).toHaveURL(/\/taxes\/\w+\/submission/);
});

test("redirect to list submission page with the applied filter", async ({ webApp }) => {
  const button = await webApp.getByTestId("list-submissions-button-2021");

  await button.click();

  await expect(webApp).toHaveURL(/\/taxes\/submissions\?year=\d{4}/);
});
