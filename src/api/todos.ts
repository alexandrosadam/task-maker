import axios from "axios";
import { ENDPOINTS } from "./endpoints";

export type ToDo = {
  id: number;
  userId: number;
  title: string;
  isCompleted: boolean;
};

export const getToDos = async (): Promise<ToDo[]> => {
  const res = await axios.get(ENDPOINTS.todos.todos);

  return res.data;
};
