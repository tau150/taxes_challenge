import { expect } from "vitest";

import NotFound from "../NotFound";

import { render } from "@/tests/render";

describe("NotFound page", () => {
  it("should match with snapshot", () => {
    const { container } = render(<NotFound />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
