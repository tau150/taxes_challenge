import { Card, CardBody, Text, Box, Button, Icon, useToast, useDisclosure } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { useQueryClient } from "@tanstack/react-query";

import { TOAST_GENERIC_ERROR, TOAST_GENERIC_SUCCESS } from "@/constants/toast";
import { QUERY_KEY } from "@/modules/tax/hooks/useGetTaxes";
import { useDeleteTaxSubmission } from "@/modules/tax/hooks/useDeleteTaxSubmission";
import DeleteResourceDialog from "@/Components/DeleteResourceDialog/DeleteResourceDialog";
import SubmissionItem from "@/modules/tax/components/SubmissionItem/SubmissionItem";

interface Props {
  properties: Record<string, string>;
}

const NOT_SHOW_VALUES = ["id", "taxId"];

const SubmissionCard = ({ properties }: Props) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate } = useDeleteTaxSubmission({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
      toast({ ...TOAST_GENERIC_SUCCESS, description: "The submission was deleted successfully" });
    },
    onError: () => toast({ ...TOAST_GENERIC_ERROR }),
  });

  const handleDeleteSubmission = () => {
    mutate({ id: properties.id, taxId: properties.taxId });
  };

  return (
    <>
      <Card
        borderTopRadius="10px"
        maxW={["100%", "400px"]}
        minW={["100%", "260px"]}
        mt={["2", "12"]}
      >
        <Box bg="green.200" borderTopRadius="10px" h="20px" />
        <CardBody>
          {Object.entries(properties)
            .filter(([key]) => !NOT_SHOW_VALUES.includes(key))
            .map(([propertyKey, propertyItem]) => (
              <SubmissionItem key={propertyKey} content={propertyItem} title={propertyKey} />
            ))}
          <Box textAlign="right">
            <Button
              colorScheme="red"
              leftIcon={<Icon as={MdDelete} />}
              variant="ghost"
              onClick={onOpen}
            />
          </Box>
        </CardBody>
      </Card>
      <DeleteResourceDialog
        isOpen={isOpen}
        resourceName="Submission"
        onClose={onClose}
        onDelete={handleDeleteSubmission}
      />
    </>
  );
};

export default SubmissionCard;
