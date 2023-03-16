import { FC, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import Routes from "./Routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from "@components/Loader/Loader";

const theme = createTheme();

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<Loader />}>
          <CssBaseline />
          <Routes />
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
