import { FC, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import Routes from "./Routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from "@components/Loader/Loader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const theme = createTheme();
const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<Loader />}>
          <QueryClientProvider client={queryClient}>
            <CssBaseline />
            <Routes />
          </QueryClientProvider>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
