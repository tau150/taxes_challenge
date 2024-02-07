import { Box, HStack } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { Tax } from "../../domain/Tax";

import { renderTaxItems } from "./Taxes.utils";

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

  const handleListButtonClick = (id: string) => {
    const route = generatePath(ROUTES.TAX_SUBMISSIONS, { value: id });

    history.push(route);
  };

  return (
    <Box mt="8" p={["2", "8"]}>
      <HStack gap="8" wrap="wrap">
        {renderTaxItems(data as Tax[], handleSendButtonClick, handleListButtonClick)}
      </HStack>
    </Box>
  );
};

export default Taxes;
