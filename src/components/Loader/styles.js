import { css } from "@emotion/react";

export const loaderContainer = () => css`
  position: absolute;
  z-index: 9999;
  color: "#fff";
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;
