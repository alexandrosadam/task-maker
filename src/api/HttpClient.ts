import axios from "axios";
import authService from "@utils/services/AuthService";
import { ENDPOINTS } from "./endpoints";
import { postNewAccessToken } from "./app";
import { URLS } from "@constants/urls";

const axiosApiInstance = axios.create();

// Add a request interceptor
axiosApiInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = authService.getAccessToken();

    if (token) {
      // Config Authorization headers
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    // Config Content-Type headers
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosApiInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const userIsUnauthorized = error.response.status === 401;
    const tokenHasExpired = userIsUnauthorized && !originalRequest._retry;

    if (tokenHasExpired) {
      originalRequest._retry = true;
      const oldRefreshToken = authService.getRefreshToken();

      // check if the access token has expired
      if (error.response.data.error === "access_token_expired") {
        // use the refresh token to get new tokens
        const newAuthData = await postNewAccessToken(oldRefreshToken!);
        authService.setTokens(newAuthData);
        // Set new header for Authorization
        axios.defaults.headers.common["Authorization"] = `Bearer ${newAuthData.access_token}`;
        // Retry the original request with the new access token
        return axiosApiInstance(originalRequest);
      }

      // If the refresh token has expired, logout the user and redirect to the login page
      if (error.response.data.error === "refresh_token_expired") {
        authService.removeTokens();
        window.location.replace(URLS.login);
      }

      // OR this one to check about refresh token
      if (userIsUnauthorized && originalRequest.url === ENDPOINTS.user.refreshToken) {
        authService.removeTokens();
        window.location.replace(ENDPOINTS.public.login);
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosApiInstance;
