import { HStack, Card, Text, CardBody, Heading, Divider, Button, Icon } from "@chakra-ui/react";
import { BsSendArrowUpFill } from "react-icons/bs";

import type { Tax } from "../../domain/Tax";

export const renderTaxItems = (data: Tax[], onClick: (id: string) => void): React.ReactNode => {
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
                <Button
                  colorScheme="teal"
                  leftIcon={<Icon as={BsSendArrowUpFill} />}
                  variant="ghost"
                  onClick={() => onClick(tax.id)}
                />
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
