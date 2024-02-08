import { faker } from "@faker-js/faker/locale/en";

import { test, expect } from "./config/test";

test.beforeEach(async ({ webApp }) => {
  const button = await webApp.getByTestId("create-submission-button-2021");

  await button.click();
});

test("has expected UI", async ({ webApp }) => {
  await expect(
    webApp.getByRole("heading", { name: /Verify and submit your tax form/i }),
  ).toBeVisible();

  await expect(webApp.getByTestId("input-name")).toBeVisible();
  await expect(webApp.getByTestId("input-surname")).toBeVisible();

  await expect(webApp.getByTestId("input-age")).toBeVisible();
  await expect(webApp.getByRole("button", { name: "send" })).toBeVisible();
  await expect(webApp.getByRole("button", { name: "send" })).toBeDisabled();
});

test("show validations as expected", async ({ webApp }) => {
  const nameInput = webApp.getByTestId("input-name");
  const surnameInput = webApp.getByTestId("input-surname");
  const ageInput = webApp.getByTestId("input-age");

  await nameInput.fill("very long long name");
  await surnameInput.fill("s");
  await ageInput.click();

  await expect(webApp.getByText(/the max length is 10/i)).toBeVisible();
  await expect(webApp.getByText(/the min length is 2/i)).toBeVisible();

  await surnameInput.click();

  await expect(webApp.getByText(/this field is required/i)).toBeVisible();
});

test("once the form is filled with valid values, redirect", async ({ webApp }) => {
  const name = faker.person.firstName().split("").splice(0, 8).join("");
  const surname = faker.person.lastName();
  const age = (Math.floor(Math.random() * (100 - 18 + 1)) + 18).toString();

  const nameInput = webApp.getByTestId("input-name");
  const surnameInput = webApp.getByTestId("input-surname");
  const ageInput = webApp.getByTestId("input-age");

  await nameInput.fill(name);
  await surnameInput.click();

  await surnameInput.fill(surname);

  await ageInput.fill(age);

  const sendButton = webApp.getByRole("button", { name: "send" });

  await expect(sendButton).toBeEnabled();
  await sendButton.click();

  await expect(webApp).toHaveURL(/\/taxes\/submissions/);
  await expect(webApp.getByText(/the submission was created successfully/i)).toBeVisible();
});
