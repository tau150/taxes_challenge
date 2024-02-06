import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ErrorBoundary from "@/Components/ErrorBoundary/ErrorBoundary";
import AuthContextProvider from "@/modules/auth/contexts/AuthContext";
import Routes from "@/routes/routes";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Box>
            <Router>
              <Routes />
            </Router>
          </Box>
        </AuthContextProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
