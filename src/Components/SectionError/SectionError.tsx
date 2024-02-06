import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
}
const SectionError = ({ title, description }: Props) => {
  return (
    <Alert
      alignItems="center"
      flexDirection="column"
      height="200px"
      justifyContent="center"
      status="error"
      textAlign="center"
      variant="subtle"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle fontSize="lg" mb={1} mt={4}>
        {title}
      </AlertTitle>
      <AlertDescription maxWidth="sm">{description}</AlertDescription>
    </Alert>
  );
};

export default SectionError;
