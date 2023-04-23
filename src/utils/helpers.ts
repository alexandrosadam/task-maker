import authService from "./services/AuthService";
import jwt_decode from "jwt-decode";

type DecodedToken = {
  exp: number;
  iat: number;
  sub: 1;
};

export const isAccessTokenExpired = (): boolean => {
  const decodeToken: DecodedToken = jwt_decode(authService.getAccessToken() ?? "");
  const accessTokenExpirationTime = new Date(decodeToken.exp);

  console.log(accessTokenExpirationTime, "accessTokenExpirationTime");
  console.log(
    "Date.now() >= accessTokenExpirationTime.getTime() = ",
    Date.now() >= accessTokenExpirationTime.getTime(),
  );

  return Date.now() >= accessTokenExpirationTime.getTime();
};

export const isRefreshTokenExpired = (): boolean => {
  const decodeToken: DecodedToken = jwt_decode(authService.getRefreshToken() ?? "");
  const refreshTokenExpirationTime = new Date(decodeToken.exp);

  console.log("refreshTokenExpirationTime = ", refreshTokenExpirationTime);
  console.log(
    "Date.now() >= refreshTokenExpirationTime.getTime() = ",
    Date.now() >= refreshTokenExpirationTime.getTime(),
  );

  return Date.now() >= refreshTokenExpirationTime.getTime();
};
