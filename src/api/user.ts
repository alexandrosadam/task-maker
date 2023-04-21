import { ENDPOINTS } from "./endpoints";
import HttpClient from "./HttpClient";

export type UserRes = {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
};

export const getUserInfo = async (): Promise<UserRes> => {
  const res = await HttpClient.get(ENDPOINTS.user.profileInfo);

  return res.data;
};
