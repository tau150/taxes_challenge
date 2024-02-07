import { Card, CardBody, Text, Box } from "@chakra-ui/react";

interface Props {
  name: string;
  surname: string;
  age: string;
  year: string;
}

const SubmissionCard = ({ name, surname, age, year }: Props) => {
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
      </CardBody>
    </Card>
  );
};

export default SubmissionCard;
