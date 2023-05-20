import { css } from "@emotion/react";

export const newTodoContainer = css`
  position: relative;
  background: white;
  border: 1px solid black;
  padding: 2rem;
  margin: 1rem;
  border-radius: 0.5rem;
  font-family: Arial;
  max-width: max-content;

  .steps-container {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }

  .btns-container {
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
  }
`;
