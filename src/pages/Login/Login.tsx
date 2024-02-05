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
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";

import logo from "/images/taxdown-logo.webp";

import { isValidEmail, isValidPassword } from "@/auth/domain/AuthUser";

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const emailInputRef: RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

  const handleSubmit = () => {
    console.log("aca!");
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
      <Image src={logo} w="180px" />
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
            <Box mt="4">
              <Button colorScheme="teal" isDisabled={!isValidForm} size="sm" w="100%">
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
