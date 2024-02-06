import { VStack, Spinner, Heading, Box } from "@chakra-ui/react";

const LoadingFullPage = () => {
  return (
    <Box h="100vh" left="0" position="absolute" right="0" top="0" zIndex="-1">
      <VStack h="100%" justify="center">
        <Spinner color="green.300" size="xl" />
        <Heading color="green.300" mt="4" size="lg">
          Loading...
        </Heading>
      </VStack>
    </Box>
  );
};

export default LoadingFullPage;
