import { Component, ErrorInfo, ReactNode } from "react";
import { VStack, Heading, Card, CardHeader, CardBody } from "@chakra-ui/react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <VStack h="100vh" justify="center">
          <Card>
            <CardHeader>
              <Heading fontSize="xl" textAlign="center">
                Opps!
              </Heading>
            </CardHeader>
            <CardBody>It seems something went wrong, please try again later.</CardBody>
          </Card>
        </VStack>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
