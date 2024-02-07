import { useState, useCallback, useEffect, ChangeEvent } from "react";

interface FilterState {
  [key: string]: string | null;
}

const filterData = (
  appliedFilters: FilterState,
  data?: Record<string, string>[],
): Record<string, string>[] => {
  if (!data) {
    return [];
  }

  const result = data.filter((item) => {
    for (const filterType in appliedFilters) {
      const filterValue = appliedFilters[filterType];

      if (filterValue !== null && item[filterType] !== filterValue) {
        return false;
      }
    }

    return true;
  });

  return result;
};

export const useFilters = (filters: FilterState, dataSet?: Record<string, string>[]) => {
  const [filteredResults, setFilteredResult] = useState<Record<string, string>[] | null>(null);
  const [appliedFilters, setAppliedFilter] = useState<FilterState>(filters);

  useEffect(() => {
    const result = filterData(appliedFilters, dataSet);

    setFilteredResult(result);
  }, [appliedFilters, dataSet]);

  const handleFilter = useCallback(
    (type: string) => (event: ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target;

      setAppliedFilter((prevState) => ({ ...prevState, [type]: value || null }));
    },
    [],
  );

  const resetFilters = () => setAppliedFilter(filters);

  return { handleFilter, filteredResults, resetFilters, appliedFilters };
};
