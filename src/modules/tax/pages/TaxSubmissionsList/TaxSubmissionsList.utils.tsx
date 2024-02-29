import { VStack, Heading, Button, Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import type { Tax } from "@/modules/tax/domain/Tax";

import { ROUTES } from "@/routes/routes.types";
import SubmissionCard from "@/modules/tax/components/SubmissionCard/SubmissionCard";

export const renderSubmissionsData = (
  handleClearClick: VoidFunction,
  data?: Record<string, string>[] | null,
): React.ReactNode => {
  if (!data || data.length === 0) {
    return (
      <HStack flexGrow="1" justify="center">
        <VStack mt="6">
          <Heading as="h4" size="md" textAlign="center">
            There are no submissions, please check the applied filters
          </Heading>
          <HStack>
            <Link to={ROUTES.TAXES}>
              <Button colorScheme="teal" mt="6">
                Go to home
              </Button>
            </Link>
            <Button colorScheme="teal" mt="6" onClick={handleClearClick}>
              Clear filters
            </Button>
          </HStack>
        </VStack>
      </HStack>
    );
  }

  return data.map((submission) => {
    return (
      <Box key={submission.id}>
        <SubmissionCard properties={submission} />
      </Box>
    );
  });
};

export const generateUniqueLis = (
  list: Record<string, string[]>,
  attribute: string,
  newElement: string,
): string[] => {
  return [...new Set([...list[attribute], newElement])];
};

export const generateFilters = (submissions: Record<string, string>[]) => {
  return submissions.reduce(
    (acc: Record<string, string[]>, current: Record<string, string>) => {
      return {
        name: generateUniqueLis(acc, "name", current.name),
        surname: generateUniqueLis(acc, "surname", current.surname),
        age: generateUniqueLis(acc, "age", current.age),
        year: generateUniqueLis(acc, "year", current.year),
      };
    },
    { name: [], surname: [], age: [], year: [] },
  );
};

export const getSubmissionsList = (data?: Tax[]) => {
  return data?.reduce((acc: Record<string, string>[], tax: Tax) => {
    if (tax.submissions) {
      const newSubmission = tax.submissions.map((sub) => {
        sub.year = tax.year;
        sub.taxId = tax.id;

        return sub;
      });

      return [...acc, ...newSubmission];
    }

    return acc;
  }, []);
};
