import { ToDo } from "@api/todos";

const TodoCard = ({ id, userId, title, isCompleted }: ToDo) => {
  return (
    <section>
      <h3>
        Todo id: {id}
        From user {userId}
        Title: {title}{" "}
      </h3>
      <div>{isCompleted ? "Completed" : "Pending"}</div>
    </section>
  );
};

export default TodoCard;
