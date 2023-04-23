import { UserRes } from "types/responses";
import { ENDPOINTS } from "./endpoints";
import HttpClient from "./HttpClient";

export const getUserInfo = async (): Promise<UserRes> => {
  const res = await HttpClient.get(ENDPOINTS.user.profileInfo);

  return res.data;
};
