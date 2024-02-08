import { expect } from "vitest";
import { render } from "tests/render";

import NotFound from "../NotFound";

describe("NotFound page", () => {
  it("should match with snapshot", () => {
    const { container } = render(<NotFound />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
