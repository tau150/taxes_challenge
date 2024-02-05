import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Routes from "@/routes/routes";

function App() {
  return (
    <Box>
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
