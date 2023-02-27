import { FC } from "react";
import ReactDOM from "react-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import { CssBaseline } from "@mui/material";

const App: FC = () => {
  return (
    <>
      <MainHeader />
      <CssBaseline />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
