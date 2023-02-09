import React, { FC } from "react";
import ReactDOM from "react-dom";
import ToDoForm from "./components/ToDoForm/ToDoForm";

const App: FC = () => {
  return (
    <section>
      <ToDoForm />
    </section>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
