import { ThemeProvider } from "@mui/material";
import { Fragment } from "react";
import { LightTheme } from "./styles/theme/Light";
import AppRoutes from "./routes";
import { GlobalStyle } from "./styles/global";

export const REACT_APP_GOOGLE_API_KEY =
  "";

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={LightTheme}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </Fragment>
  );
}

export { App };
