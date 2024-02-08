import { expect } from "vitest";

import LoadingFullPage from "../LoadingFullPage";

import { render } from "tests/render";

describe("LoadingFullPage component", () => {
  it("should match with snapshot", () => {
    const { container } = render(<LoadingFullPage />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
