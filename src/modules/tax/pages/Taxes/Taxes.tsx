import { Box, HStack, Divider, Heading, Link as ChakraLink } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { renderTaxItems } from "./Taxes.utils";

import { Tax } from "@/modules/tax/domain/Tax";
import { generatePath } from "@/utils/routing";
import { ROUTES } from "@/routes/routes.types";
import { useGetTaxes } from "@/modules/tax/hooks/useGetTaxes";
import LoadingFullPage from "@/Components/LoadingFullPage/LoadingFullPage";
const Taxes = () => {
  const { data, isLoading } = useGetTaxes();
  const history = useHistory();

  if (isLoading) return <LoadingFullPage />;

  const handleSendButtonClick = (id: string) => {
    const route = generatePath(ROUTES.TAX_SUBMISSION_CREATE, { value: id });

    history.push(route);
  };

  const handleListButtonClick = (id: string, year: string) => {
    const route = generatePath(ROUTES.TAX_SUBMISSIONS, { value: id });

    history.push({
      pathname: route,
      search: `?year=${year}`,
    });
  };

  return (
    <Box mt="8" p={["2", "8"]}>
      <Box>
        <ChakraLink as={Link} to={ROUTES.TAX_SUBMISSIONS}>
          All submissions
        </ChakraLink>
      </Box>
      <Divider mb="8" mt="2" />
      <Heading mb="4" pb="4" size="md" textAlign="center">
        Taxes Campaigns
      </Heading>
      <HStack gap="8" wrap="wrap">
        {renderTaxItems(data as Tax[], handleSendButtonClick, handleListButtonClick)}
      </HStack>
    </Box>
  );
};

export default Taxes;
