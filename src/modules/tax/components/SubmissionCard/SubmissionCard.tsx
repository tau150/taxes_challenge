import { Card, CardBody, Text, Box, Button, Icon, useToast } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { useQueryClient } from "@tanstack/react-query";

import { TOAST_GENERIC_ERROR, TOAST_GENERIC_SUCCESS } from "@/constants/toast";
import { QUERY_KEY } from "@/modules/tax/hooks/useGetTaxes";
import { useDeleteTaxSubmission } from "@/modules/tax/hooks/useDeleteTaxSubmission";
interface Props {
  id: string;
  name: string;
  surname: string;
  age: string;
  year: string;
  taxId: string;
}

const SubmissionCard = ({ name, surname, age, year, id, taxId }: Props) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const { mutate } = useDeleteTaxSubmission({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
      toast({ ...TOAST_GENERIC_SUCCESS, description: "The submission was deleted successfully" });
    },
    onError: () => toast({ ...TOAST_GENERIC_ERROR }),
  });

  const handleDeleteSubmission = () => {
    mutate({ id, taxId });
  };

  return (
    <Card borderTopRadius="10px" maxW={["100%", "400px"]} minW={["100%", "260px"]} mt={["2", "12"]}>
      <Box bg="green.200" borderTopRadius="10px" h="20px" />
      <CardBody>
        <Text>
          <Text as="span" fontWeight="bold">
            Name:{" "}
          </Text>
          {name}
        </Text>
        <Text>
          <Text as="span" fontWeight="bold">
            Surname:{" "}
          </Text>
          {surname}
        </Text>
        <Text>
          <Text as="span" fontWeight="bold">
            Age:{" "}
          </Text>
          {age}
        </Text>
        <Text>
          <Text as="span" fontWeight="bold">
            Year:{" "}
          </Text>
          {year}
        </Text>
        <Box textAlign="right">
          <Button
            colorScheme="red"
            leftIcon={<Icon as={MdDelete} />}
            variant="ghost"
            onClick={handleDeleteSubmission}
          />
        </Box>
      </CardBody>
    </Card>
  );
};

export default SubmissionCard;
