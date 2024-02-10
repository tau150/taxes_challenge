import { expect } from "vitest";
import { render, screen } from "tests/render";

import SectionError from "../SectionError";

describe("SectionError component", () => {
  it("should render properly with default values", () => {
    const { container } = render(<SectionError />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render properly with title and description provided ", () => {
    const FAKE_TITLE = "some title";
    const FAKE_DESCRIPTION = "some description";

    render(<SectionError description={FAKE_DESCRIPTION} title={FAKE_TITLE} />);

    expect(screen.getByText(FAKE_TITLE)).toBeInTheDocument();
    expect(screen.getByText(FAKE_DESCRIPTION)).toBeInTheDocument();
  });
});
