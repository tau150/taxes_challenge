import { expect, vi, Mock } from "vitest";
import { MemoryRouter } from "react-router-dom";

import PrivateRoute from "../PrivateRoute";

import { render, screen } from "tests/render";
import { useAuth } from "@/modules/auth/hooks/useAuth";

vi.mock("@/modules/auth/hooks/useAuth");

(useAuth as Mock).mockReturnValue({
  isAuth: true,
});

const FAKE_TEST_CONTENT = "some content";

describe("PrivateRoute", () => {
  it("should render children if the user is authenticated", () => {
    render(
      <MemoryRouter initialEntries={["/private"]}>
        <PrivateRoute path="/private">
          <div>{FAKE_TEST_CONTENT}</div>
        </PrivateRoute>
      </MemoryRouter>,
    );

    expect(screen.getByText(FAKE_TEST_CONTENT)).toBeInTheDocument();
  });

  it("should redirect when the user is not authenticated", () => {
    (useAuth as Mock).mockReturnValue({
      isAuth: false,
    });

    render(
      <MemoryRouter initialEntries={["/private"]}>
        <PrivateRoute path="/private">
          <div>{FAKE_TEST_CONTENT}</div>
        </PrivateRoute>
      </MemoryRouter>,
    );

    expect(screen.queryByText(FAKE_TEST_CONTENT)).not.toBeInTheDocument();
    expect(window.location.pathname).toBe("/");
  });
});
