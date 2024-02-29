import { Text, Box } from "@chakra-ui/react";

interface Props {
  title: string;
  content: string;
}

const SubmissionItem = ({ title, content }: Props) => {
  return (
    <Box>
      <Text>
        <Text as="span" fontWeight="bold">
          {title}:{" "}
        </Text>
        {content}
      </Text>
    </Box>
  );
};

export default SubmissionItem;
