import { expect, vi, Mock } from "vitest";
import userEvent from "@testing-library/user-event";

import PrivateLayout from "../PrivateLayout";

import { useAuth } from "@/modules/auth/hooks/useAuth";
import { render, screen } from "tests/render";

vi.mock("@/modules/auth/hooks/useAuth");

const FAKE_USER_NAME = "test user";
const FAKE_CONTENT = "some fake text";
const mockedLogout = vi.fn();

describe("PrivateLayout", () => {
  (useAuth as Mock).mockReturnValue({
    user: { name: FAKE_USER_NAME },
    logOut: mockedLogout,
  });

  it("should render properly", () => {
    render(
      <PrivateLayout>
        <p>{FAKE_CONTENT}</p>
      </PrivateLayout>,
    );

    expect(screen.getByText(FAKE_CONTENT)).toBeInTheDocument();
    expect(screen.getByText(FAKE_USER_NAME)).toBeInTheDocument();
  });

  it("should call logout function properly", async () => {
    const user = userEvent.setup();

    render(
      <PrivateLayout>
        <p>{FAKE_CONTENT}</p>
      </PrivateLayout>,
    );

    const logoutButton = screen.getByRole("button", { name: /Logout/i });

    await user.click(logoutButton);

    expect(mockedLogout).toHaveBeenCalled();
  });
});
