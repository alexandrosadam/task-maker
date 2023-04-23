import { getToDos } from "@api/todos";
import { ToDoList } from "@components";
import { queryKeys } from "@constants/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { useUIStore } from "@stores";
import { getUserInfo } from "@api/user";

const Dashboard = () => {
  const { updateUserProfile } = useUIStore();

  useQuery([queryKeys.user.profile], () => getUserInfo(), {
    onSuccess: (response) => {
      updateUserProfile(response);
    },
  });

  const { data } = useQuery([queryKeys.todos], () => getToDos(), {
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      {" "}
      <ToDoList todos={data?.slice(0, 10) ?? []} />{" "}
    </div>
  );
};

export default Dashboard;
