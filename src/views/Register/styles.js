import { css } from "@emotion/react";

export const registerContainer = css`
  background-image: url("https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9naW58ZW58MHx8MHx8&w=1000&q=80");
  background-size: cover;
  overflow: auto;
  width: 100%;
  height: 100%;
  position: absolute;

  .steps-container {
    margin-bottom: 1rem;
  }

  .registerForm {
    width: 100%;
    max-width: 440px;
    margin: 10rem auto auto;
    border-radius: 10px;
    background-color: #f2f2f2;
    padding: 2rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  .buttons-container {
    margin-top: 1rem;
    justify-content: center;

    .back-button {
      margin-right: 1rem;
    }
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;
