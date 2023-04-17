import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ComponentType, FC, ReactElement } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { HashRouter } from "react-router-dom";
import { render, RenderResult, RenderOptions } from "@testing-library/react";

const theme = createTheme();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
  logger: {
    log: console.log,
    warn: console.warn,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    error: () => {}, // Ignore network errors in tests
  },
});

interface AllTheProvidersProps {
  children: React.ReactNode;
}

const AllTheProviders: FC<AllTheProvidersProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <HashRouter>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </HashRouter>
  </ThemeProvider>
);

const customRender = (ui: ReactElement, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: AllTheProviders as ComponentType, ...options });

export * from "@testing-library/react";

export { customRender as render };
