import { FC } from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@mui/material";
import Routes from "./Routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";

const theme = createTheme();

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
