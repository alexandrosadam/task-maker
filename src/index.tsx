import { FC } from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@mui/material";
import Routes from "./Routes";

const App: FC = () => {
  return (
    <>
      <CssBaseline />
      <Routes />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
