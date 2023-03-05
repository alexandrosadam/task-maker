import { css } from "@emotion/react";

export const main = css`
  position: relative;
  display: flex;

  .main-content-container {
    width: 100%;
  }
`;

export const content = () => css`
  position: relative;

  .main-content-wrapper {
    position: relative;
    max-width: 1920px;
    padding: 1rem 1rem 3rem;
    z-index: 1;
  }
`;
