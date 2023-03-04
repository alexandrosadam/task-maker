import { FC, useState } from "react";
import Button from "@mui/material/Button";
import { container } from "./styles";

const ToDoForm: FC = () => {
  const [input, setInput] = useState("");

  return (
    <form css={container}>
      <input type="text" placeholder="Add a todo.." value={input} />

      <Button variant="contained" className="to-do-button">
        Add todo
      </Button>
    </form>
  );
};

export default ToDoForm;
