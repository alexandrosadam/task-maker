import { css } from "@emotion/react";

export const formWrapperContainer = css`
  .form_title {
    text-align: center;
    margin: 0;
    margin-bottom: 2rem;
  }

  .form_step {
    display: grid;
    gap: 1rem 0.5rem;
    justify-content: flex-start;
    grid-template-columns: auto minmax(auto, 400px);
  }
`;
