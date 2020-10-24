import React from "react";
import { ThemeProvider } from "@material-ui/styles";

import Routes from "./Routes";

import theme, { Theme } from "./styles/theme";

function App(): React.ReactElement {
  return (
    <ThemeProvider<Theme> theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
