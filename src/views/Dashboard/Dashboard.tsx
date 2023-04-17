import { getToDos } from "@api/todos";
import { ToDoList } from "@components";
import { queryKeys } from "@constants/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";

const Dashboard: FC = () => {
  const [todos, setTodos] = useState([]);

  const { data, isLoading } = useQuery([queryKeys.todos], () => getToDos(), {
    refetchOnWindowFocus: false,
  });

  console.log(data);
  return (
    <div>
      {" "}
      <ToDoList todos={data?.slice(0, 10) ?? []} />{" "}
    </div>
  );
};

export default Dashboard;
