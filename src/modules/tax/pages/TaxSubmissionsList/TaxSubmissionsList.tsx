import { Box, Card, Heading, VStack, Divider, Flex } from "@chakra-ui/react";
import { useMemo } from "react";

import { useSearchParams } from "@/hooks/useSearchParams";
import FiltersSelector from "@/modules/tax/pages/TaxSubmissionsList/components/FilterSelector/FilterSelector";
import { renderSubmissionsData } from "@/modules/tax/pages/TaxSubmissionsList/TaxSubmissionsList.utils";
import { useGetTaxes } from "@/modules/tax/hooks/useGetTaxes";
import LoadingFullPage from "@/Components/LoadingFullPage/LoadingFullPage";
import SectionError from "@/Components/SectionError/SectionError";
import { useFilters } from "@/hooks/useFilters";
import {
  generateFilters,
  getSubmissionsList,
} from "@/modules/tax/pages/TaxSubmissionsList/TaxSubmissionsList.utils";

enum FILTER_TYPE {
  NAME = "name",
  SURNAME = "surname",
  AGE = "age",
  YEAR = "year",
}

const FILTERS = {
  [FILTER_TYPE.AGE]: null,
  [FILTER_TYPE.NAME]: null,
  [FILTER_TYPE.SURNAME]: null,
  [FILTER_TYPE.YEAR]: null,
};

const TaxSubmissionsList = () => {
  const { data, isError, isLoading } = useGetTaxes();
  const { year } = useSearchParams(FILTER_TYPE.YEAR);
  const lists = useMemo(() => getSubmissionsList(data), [data]);
  const { handleFilter, filteredResults, resetFilters, appliedFilters } = useFilters(
    { ...FILTERS, [FILTER_TYPE.YEAR]: year },
    lists,
  );

  if (isLoading) return <LoadingFullPage />;

  const filters = lists && generateFilters(lists);

  const handleResetFilters = () => {
    resetFilters();
  };

  return (
    <Box mt="12">
      <VStack>
        {isError ? (
          <Box>
            <SectionError />
          </Box>
        ) : (
          <Box w="100%">
            <Heading pb="4" size="md" textAlign="center">
              Submissions
            </Heading>
            <VStack mt={["2", "6"]}>
              {filters && (
                <Box p={["2", "6"]}>
                  <Flex direction={["column", "row"]} gap={["4", "0"]}>
                    <FiltersSelector
                      filters={filters.name}
                      title="Name"
                      value={appliedFilters.name ?? ""}
                      onSelect={handleFilter(FILTER_TYPE.NAME)}
                    />
                    <FiltersSelector
                      filters={filters.surname}
                      title="Surname"
                      value={appliedFilters.surname ?? ""}
                      onSelect={handleFilter(FILTER_TYPE.SURNAME)}
                    />
                    <FiltersSelector
                      filters={filters.age}
                      title="Age"
                      value={appliedFilters.age ?? ""}
                      onSelect={handleFilter(FILTER_TYPE.AGE)}
                    />
                    <FiltersSelector
                      filters={filters.year}
                      title="Year"
                      value={appliedFilters.year ?? ""}
                      onSelect={handleFilter(FILTER_TYPE.YEAR)}
                    />
                  </Flex>
                </Box>
              )}
            </VStack>
            <Divider />
            <Flex
              direction={["column", "row"]}
              gap={["1", "6"]}
              justify={["center", "start"]}
              p={["2", "4"]}
              wrap="wrap"
            >
              {renderSubmissionsData(handleResetFilters, filteredResults)}
            </Flex>
            <Card minW="400px" mt="12" />
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default TaxSubmissionsList;
