import { expect } from "vitest";

import { generatePath } from "../routing";

import { ROUTES } from "@/routes/routes.types";

describe("Routing utils", () => {
  it("should return the correct data", () => {
    const FAKE_VALUE = "39";

    const expectedResult = `/taxes/${FAKE_VALUE}/submission`;

    expect(generatePath(ROUTES.TAX_SUBMISSION_CREATE, { key: ":id", value: FAKE_VALUE })).toBe(
      expectedResult,
    );
  });

  it("should return the correct data with default values", () => {
    const FAKE_VALUE = "39";

    const expectedResult = `/taxes/${FAKE_VALUE}/submission`;

    expect(generatePath(ROUTES.TAX_SUBMISSION_CREATE, { value: FAKE_VALUE })).toBe(expectedResult);
  });
});
