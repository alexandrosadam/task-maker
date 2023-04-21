import { ENDPOINTS } from "./endpoints";
import HttpClient from "./HttpClient";

export type LoginPostData = {
  username: string;
  password: string;
};

export type AuthRes = {
  access_token: string;
  refresh_token: string;
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

export const signIn = async (formData: LoginPostData): Promise<AuthRes> => {
  const bodyFormData = new FormData();

  bodyFormData.append("email", formData.username);
  bodyFormData.append("password", formData.password);

  const res = await HttpClient.post(ENDPOINTS.public.login, bodyFormData);

  return res.data;
};

export const postNewAccessToken = async (refreshToken: string): Promise<AuthRes> => {
  const bodyFormData = new FormData();

  bodyFormData.append("refresh_token", refreshToken);

  const res = await HttpClient.post(ENDPOINTS.user.refreshToken, bodyFormData);

  return res.data;
};
