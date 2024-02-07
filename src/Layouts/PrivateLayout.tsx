import { Box, Image, Button, HStack, StackDivider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import logo from "/images/taxdown-logo.png";

import { useAuth } from "@/modules/auth/hooks/useAuth";
import { ROUTES } from "@/routes/routes.types";

interface Props {
  children: React.ReactNode;
}

const PrivateLayout = ({ children }: Props) => {
  const { user, logOut } = useAuth();

  const handleButtonClick = () => logOut();

  return (
    <Box position="relative">
      <HStack bg="gray.200" h="80px" justify="space-between" p="8">
        <Link to={ROUTES.TAXES}>
          <Image src={logo} w="120px" />
        </Link>
        <HStack divider={<StackDivider borderColor="green.400" />} gap="4">
          <p>{user?.name}</p>
          <Button variant="link" onClick={handleButtonClick}>
            Logout
          </Button>
        </HStack>
      </HStack>
      {children}
    </Box>
  );
};

export default PrivateLayout;
