import { ToDo } from "@api/todos";
import TodoCard from "@components/TodoCard/TodoCard";
import { cardContainer } from "./style";

type ToDoListProps = {
  todos: ToDo[];
};

const ToDoList = ({ todos }: ToDoListProps) => {
  return (
    <section css={cardContainer} className="item-container">
      {todos.map(({ id, userId, title, isCompleted }) => (
        <TodoCard id={id} userId={userId} title={title} isCompleted={isCompleted} />
      ))}
    </section>
  );
};

export default ToDoList;
