import { expect } from "vitest";
import { ChangeEvent } from "react";
import { renderHook, act } from "tests/render";

import { useFilters } from "../useFilters";

describe("useFilters hook", () => {
  it("it should apply filters as expected", async () => {
    const filters = { name: null, age: null };
    const dataSet = [
      { id: "1", name: "John", age: "30" },
      { id: "1", name: "John", age: "52" },
      { id: "2", name: "Jane", age: "25" },
      { id: "3", name: "Doe", age: "40" },
    ];

    const { result } = renderHook(() => useFilters(filters, dataSet));

    expect(result.current.filteredResults).toEqual(dataSet);

    act(() => {
      result.current.handleFilter("name")({
        target: { value: "John" },
      } as ChangeEvent<HTMLSelectElement>);
    });

    expect(result.current.filteredResults).toEqual([
      { id: "1", name: "John", age: "30" },
      { id: "1", name: "John", age: "52" },
    ]);

    act(() => {
      result.current.handleFilter("age")({
        target: { value: "30" },
      } as ChangeEvent<HTMLSelectElement>);
    });

    expect(result.current.filteredResults).toEqual([{ id: "1", name: "John", age: "30" }]);
  });

  it("should reset filters properly", () => {
    const filters = { name: null, age: null };
    const dataSet = [
      { id: "1", name: "John", age: "30" },
      { id: "2", name: "Jane", age: "25" },
      { id: "3", name: "Doe", age: "40" },
    ];

    const { result } = renderHook(() => useFilters(filters, dataSet));

    act(() => {
      result.current.handleFilter("name")({
        target: { value: "John" },
      } as ChangeEvent<HTMLSelectElement>);
    });

    expect(result.current.filteredResults).toEqual([{ id: "1", name: "John", age: "30" }]);

    act(() => {
      result.current.resetFilters();
    });

    expect(result.current.filteredResults).toEqual(dataSet);
  });
});
