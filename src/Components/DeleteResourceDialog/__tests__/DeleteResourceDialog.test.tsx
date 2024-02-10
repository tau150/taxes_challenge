import { expect, vi } from "vitest";
import { render, screen } from "tests/render";
import userEvent from "@testing-library/user-event";

import DeleteResourceDialog from "../DeleteResourceDialog";

test("renders alert dialog with correct title and buttons", async () => {
  const user = userEvent.setup();

  const FAKE_RESOURCE_NAME = "Customer";
  const mockedOnClose = vi.fn();
  const mockedOnDelete = vi.fn();
  const isOpen = true;

  render(
    <DeleteResourceDialog
      isOpen={isOpen}
      resourceName={FAKE_RESOURCE_NAME}
      onClose={mockedOnClose}
      onDelete={mockedOnDelete}
    />,
  );

  const alertDialogHeader = screen.getByText(`Delete ${FAKE_RESOURCE_NAME}`);

  expect(alertDialogHeader).toBeInTheDocument();

  const cancelButton = screen.getByText("Cancel");

  expect(cancelButton).toBeInTheDocument();

  const deleteButton = screen.getByText("Delete");

  expect(deleteButton).toBeInTheDocument();

  await user.click(deleteButton);
  expect(mockedOnDelete).toHaveBeenCalledTimes(1);
});
