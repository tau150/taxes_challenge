import {
  HStack,
  Box,
  Card,
  Text,
  CardBody,
  Heading,
  Divider,
  Button,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { BsSendArrowUpFill } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";

import type { Tax } from "@/modules/tax/domain/Tax";

const hasSubmissions = (tax: Tax) => tax?.submissions && tax.submissions.length > 0;

export const renderTaxItems = (
  data: Tax[],
  onClickSendButton: (id: string) => void,
  onClickListButton: (id: string, year: string) => void,
): React.ReactNode => {
  return (
    <>
      {data.map((tax) => {
        return (
          <Card key={tax.id} minW="400px">
            <CardBody>
              <HStack justify="space-between">
                <Heading as="h3" size="md">
                  {tax.name}
                </Heading>
                <Box>
                  {hasSubmissions(tax) && (
                    <Tooltip hasArrow label="Submissions list" placement="top">
                      <Button
                        colorScheme="teal"
                        data-testid={`list-submissions-button-${tax.year}`}
                        leftIcon={<Icon as={CiBoxList} />}
                        variant="ghost"
                        onClick={() => onClickListButton(tax.id, tax.year)}
                      />
                    </Tooltip>
                  )}
                  <Tooltip hasArrow label="Send submission" placement="top">
                    <Button
                      colorScheme="teal"
                      data-testid={`create-submission-button-${tax.year}`}
                      leftIcon={<Icon as={BsSendArrowUpFill} />}
                      variant="ghost"
                      onClick={() => onClickSendButton(tax.id)}
                    />
                  </Tooltip>
                </Box>
              </HStack>
              <Divider mt="2" />
              <Text mt="2">Year: {tax.year}</Text>
            </CardBody>
          </Card>
        );
      })}
    </>
  );
};
