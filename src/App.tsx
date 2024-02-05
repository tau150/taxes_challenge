import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AuthContextProvider from "@/contexts/AuthContext";
import Routes from "@/routes/routes";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Box>
          <Router>
            <Routes />
          </Router>
        </Box>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
