import { FC, useState } from "react";
import Button from "@mui/material/Button";

const ToDoForm: FC = () => {
  const [input, setInput] = useState("");

  return (
    <form>
      <input type="text" placeholder="Add a todo.." value={input} />

      <Button variant="contained">Add todo</Button>
    </form>
  );
};

export default ToDoForm;
