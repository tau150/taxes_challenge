import { useParams } from "react-router-dom";
import { Box, Card, Heading, HStack, CardBody, VStack } from "@chakra-ui/react";

import SectionError from "@/Components/SectionError/SectionError";
import { useGetTaxForm } from "@/modules/tax/hooks/useGetTaxForm";
import LoadingFullPage from "@/Components/LoadingFullPage/LoadingFullPage";
const TaxSubmission = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetTaxForm(id);

  if (isLoading) return <LoadingFullPage />;

  return (
    <HStack justify="center" mt="12">
      <VStack>
        <Heading size="md">Verify and submit your tax form</Heading>
        {isError ? (
          <Box mt="8">
            <SectionError
              description="We had some issue getting the information, please try again later"
              title="Opps"
            />
          </Box>
        ) : (
          <Card minW="200px" mt="12">
            <CardBody>test</CardBody>
          </Card>
        )}
      </VStack>
    </HStack>
  );
};

export default TaxSubmission;
