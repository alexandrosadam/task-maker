import { css } from "@emotion/react";

export const headerContainer = () => css`
  .toolbar-container {
    display: flex;
    justify-content: space-between;
  }

  .logo-container {
    display: flex;
    text-decoration: none;

    .logo {
      width: 40px;
      height: 40px;
      margin-right: 1rem;
    }
  }

  .navigation-items {
    list-style-type: none;

    .list-item {
      text-decoration: none;
      margin-right: 1rem;
      font-size: 1.25rem;

      &:hover {
        color: black;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
