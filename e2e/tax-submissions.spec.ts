import { test, expect } from "./config/test";

test.beforeEach(async ({ webApp }) => {
  const data = [
    {
      id: "1",
      name: "Tax Season 2021",
      year: "2021",
      submissions: [
        {
          name: "erika",
          surname: "gonzalez",
          age: "20",
          id: ":rd:",
        },
        {
          name: "ricardo",
          surname: "fernandez",
          age: "24",
          id: "sd2",
        },
      ],
    },
    {
      id: "2",
      name: "Tax Season 2022",
      year: "2022",
      submissions: [
        {
          name: "luciana",
          surname: "perez",
          age: "54",
          id: ":23:",
        },
        {
          name: "andrea",
          surname: "castro",
          age: "24",
          id: "34df:",
        },
      ],
    },
  ];

  await webApp.route("http://localhost:3000/taxes", async (route) => {
    await route.fulfill({ json: data });
  });

  const button = await webApp.getByTestId("list-submissions-button-2021");

  await button.click();
});

test("show the correct UI when there are no results for the applied filters and click go home button", async ({
  webApp,
}) => {
  await webApp.getByLabel("Age").selectOption("54");

  await expect(
    webApp.getByRole("heading", {
      name: /there are no submissions, please check the applied filters/i,
    }),
  ).toBeVisible();

  const goHomeButton = await webApp.getByRole("button", { name: "Go to home" });

  await expect(goHomeButton).toBeVisible();

  await goHomeButton.click();

  await expect(webApp).toHaveURL("/taxes");
});

test("show the correct UI when there are no results for the applied filters and click clear filters", async ({
  webApp,
}) => {
  await webApp.getByLabel("Age").selectOption("54");

  await expect(
    webApp.getByRole("heading", {
      name: /there are no submissions, please check the applied filters/i,
    }),
  ).toBeVisible();

  const clearButton = await webApp.getByRole("button", { name: "Clear filters" });

  await expect(clearButton).toBeVisible();

  await clearButton.click();

  await expect(webApp.getByText(/Name: erika/i)).toBeVisible();
});

test("show apply filters properly", async ({ webApp }) => {
  await expect(
    webApp.getByRole("heading", {
      name: /Submissions/i,
    }),
  ).toBeVisible();

  await webApp.getByLabel("Year").selectOption("Select filter");

  await expect(webApp.getByText(/Name: andrea/i)).toBeVisible();
  await expect(webApp.getByText(/Name: luciana/i)).toBeVisible();
  await expect(webApp.getByText(/Name: ricardo/i)).toBeVisible();
  await expect(webApp.getByText(/Name: erika/i)).toBeVisible();

  await webApp.getByLabel("Age").selectOption("24");

  await expect(webApp.getByText(/Name: luciana/i)).not.toBeVisible();
  await expect(webApp.getByText(/Name: erika/i)).not.toBeVisible();

  await webApp.getByLabel("Year").selectOption("2022");

  await expect(webApp.getByText(/Name: ricardo/i)).not.toBeVisible();

  await webApp.getByLabel("Age").selectOption("20");

  await expect(
    webApp.getByRole("heading", {
      name: /there are no submissions, please check the applied filters/i,
    }),
  ).toBeVisible();
});
