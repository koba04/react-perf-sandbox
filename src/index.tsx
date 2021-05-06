import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "smarthr-ui";

import { App } from "./App";

const theme = createTheme({});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
