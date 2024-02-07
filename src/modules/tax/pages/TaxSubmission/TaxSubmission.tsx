import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  Heading,
  HStack,
  CardBody,
  VStack,
  Button,
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { usePostTaxForm } from "@/modules/tax/hooks/usePostTaxForm";
import { ROUTES } from "@/routes/routes.types";
import { TOAST_GENERIC_ERROR } from "@/constants/toast";
import SectionError from "@/Components/SectionError/SectionError";
import { useGetTaxForm } from "@/modules/tax/hooks/useGetTaxForm";
import LoadingFullPage from "@/Components/LoadingFullPage/LoadingFullPage";

const TaxSubmission = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetTaxForm(id);

  const history = useHistory();
  const toast = useToast();
  const { mutate } = usePostTaxForm({
    onSuccess: () => {
      history.push(ROUTES.TAX_SUBMISSIONS);
    },
    onError: () => toast({ ...TOAST_GENERIC_ERROR }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  if (isLoading || !data) return <LoadingFullPage />;

  const onSubmit = (data: Record<string, string>) => {
    mutate({ id, data });
  };

  return (
    <HStack justify="center" mt="12">
      <VStack>
        <Heading size="md">Verify and submit your tax form</Heading>
        {isError ? (
          <Box>
            <SectionError />
          </Box>
        ) : (
          <Card minW="400px" mt="12">
            <CardBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                {data.inputFields?.map((input) => {
                  return (
                    <Box key={input.id} mt="6">
                      <FormControl isInvalid={!!errors[input.id]}>
                        <FormLabel>{input.label}</FormLabel>
                        <Input
                          placeholder={input.placeholder}
                          type={input.type}
                          {...register(input.id, {
                            ...input.validations,
                          })}
                        />
                        <FormErrorMessage>{errors[input.id]?.message as string}</FormErrorMessage>
                      </FormControl>
                    </Box>
                  );
                })}
                <Button
                  colorScheme="teal"
                  isDisabled={!isValid}
                  mt="6"
                  size="sm"
                  type="submit"
                  w="100%"
                >
                  Send
                </Button>
              </form>
            </CardBody>
          </Card>
        )}
      </VStack>
    </HStack>
  );
};

export default TaxSubmission;
