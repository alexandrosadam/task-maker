import { newTodoContainer } from "./styles";
import MultiStepForm from "@components/MutliStepForm/MultiStepForm";

const TodoNew = () => {
  return (
    <div css={newTodoContainer}>
      <MultiStepForm formType="new" />
    </div>
  );
};

export default TodoNew;
