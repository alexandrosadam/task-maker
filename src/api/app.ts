import { ENDPOINTS } from "./endpoints";
import axios from "axios";
export type LoginPostData = {
  username: string;
  password: string;
};

export type AuthRes = {
  token: string;
};

export type UserRes = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};

const formContentType = {
  "Content-Type": "application/json",
};

export const signIn = async (formData: LoginPostData): Promise<UserRes> => {
  const bodyFormData = new FormData();

  bodyFormData.append("username", formData.username);
  bodyFormData.append("password", formData.password);

  const res = await axios.post(ENDPOINTS.public.login, bodyFormData, {
    headers: formContentType,
  });

  return res.data;
};
