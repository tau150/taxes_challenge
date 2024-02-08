import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("has expected UI", async ({ page }) => {
  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
  await expect(page.getByRole("textbox", { name: "email" })).toBeVisible();
  await expect(page.getByRole("textbox", { name: "password" })).toBeVisible();
  await expect(page.getByRole("button", { name: "send" })).toBeVisible();
  await expect(page.getByRole("button", { name: "send" })).toBeDisabled();
});

test("show validation error for email format", async ({ page }) => {
  await page.getByRole("textbox", { name: "email" }).fill("test@");
  await page.getByRole("textbox", { name: "password" }).fill("123");
  await expect(page.getByText(/incorrect email format/i)).toBeVisible();
  await page.getByRole("textbox", { name: "email" }).fill("testuser@mail.com");
  await expect(page.getByText(/incorrect email format/i)).not.toBeVisible();
});

test("show invalid credentials error when email or password is incorrect", async ({ page }) => {
  await page.getByRole("textbox", { name: "email" }).fill("testuser@mail.com");
  await page.getByRole("textbox", { name: "password" }).fill("incorrect password");
  await page.getByRole("button", { name: "send" }).click();
  await expect(page.getByText(/invalid credentials/i)).toBeVisible();
});

test("redirect after a valid login", async ({ page }) => {
  await page.getByRole("textbox", { name: "email" }).fill("testuser@mail.com");
  await page.getByRole("textbox", { name: "password" }).fill("123456");
  await page.getByRole("button", { name: "send" }).click();
  await expect(page.getByText(/invalid credentials/i)).not.toBeVisible();
  await expect(page).toHaveURL("/taxes");
});
