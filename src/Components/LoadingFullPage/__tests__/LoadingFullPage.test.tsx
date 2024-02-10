import { expect } from "vitest";
import { render } from "tests/render";

import LoadingFullPage from "../LoadingFullPage";

describe("LoadingFullPage component", () => {
  it("should match with snapshot", () => {
    const { container } = render(<LoadingFullPage />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
