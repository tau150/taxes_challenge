import { VStack, Box, Heading, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { ROUTES } from "@/routes/routes.types";

const NotFound = () => {
  return (
    <VStack h="100vh" justify="center">
      <Heading color="green.300">404!</Heading>
      <Heading>Something went wrong</Heading>
      <Text>The page you are looking for does not exist</Text>
      <Box mt="4">
        <Link to={ROUTES.ROOT}>
          <Button colorScheme="teal">Go to home</Button>
        </Link>
      </Box>
    </VStack>
  );
};

export default NotFound;
