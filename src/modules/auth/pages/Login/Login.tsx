import { useState, useRef, useEffect, RefObject } from "react";
import {
  Box,
  VStack,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Image,
  Input,
  FormControl,
  FormLabel,
  Text,
  Button,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { ROUTES } from "@/routes/routes.types";

import logo from "/images/taxdown-logo.png";

import {
  isValidEmail,
  isValidPassword,
  isExistingUser,
  AuthUser,
} from "@/modules/auth/domain/Auth";
import { useLogin } from "@/modules/auth/hooks/useLogin";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { TOAST_GENERIC_ERROR } from "@/constants/toast";

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [isInvalidUser, setIsInvalidUser] = useState(false);
  const history = useHistory();
  const toast = useToast();

  const emailInputRef: RefObject<HTMLInputElement> = useRef(null);
  const { setUser } = useAuth();
  const mutation = useLogin({
    onSuccess: (data) => {
      if (!isExistingUser(data.status)) {
        setIsInvalidUser(true);

        return;
      }
      setUser(data as AuthUser);
      history.push(ROUTES.TAXES);
    },
    onError: () => {
      toast({ ...TOAST_GENERIC_ERROR });
    },
  });

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    mutation.mutate(formValues);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const isValidForm = isValidEmail(formValues.email) && isValidPassword(formValues.password);

  const showEmailErrorFormat =
    formValues.email.length > 0 &&
    !isValidEmail(formValues.email) &&
    document.activeElement !== emailInputRef.current;

  return (
    <VStack h="100vh" justify="center">
      <Image mb="8" src={logo} w="180px" />
      <Card>
        <CardHeader>
          <Heading fontSize="xl" textAlign="center">
            Login
          </Heading>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={showEmailErrorFormat} minW={["100%", "350px"]}>
              <FormLabel ml="2">Email</FormLabel>
              <Input
                ref={emailInputRef}
                m="2"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
              <FormErrorMessage>Incorrect email format</FormErrorMessage>
            </FormControl>
            <FormControl minW={["100%", "300px"]} mt="4">
              <FormLabel mb="0" ml="2">
                Password
              </FormLabel>
              <Input
                m="2"
                name="password"
                placeholder="Password"
                type="password"
                value={formValues.password}
                onChange={handleChange}
              />
            </FormControl>
            {isInvalidUser && (
              <Text color="red.600" mt="4" textAlign="center">
                Invalid credentials
              </Text>
            )}
            <Box mt="4">
              <Button
                colorScheme="teal"
                isDisabled={!isValidForm}
                isLoading={mutation.isPending}
                size="sm"
                type="submit"
                w="100%"
              >
                Send
              </Button>
            </Box>
          </form>
        </CardBody>
      </Card>
    </VStack>
  );
};

export default Login;
