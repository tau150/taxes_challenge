import { expect, afterEach } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { vi } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

const fetchMocker = createFetchMock(vi);

fetchMocker.enableMocks();
