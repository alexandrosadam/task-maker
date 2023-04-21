import axios from "axios";
import { logAxiosError } from "./helpers";
import authService from "@utils/services/AuthService";
import { ENDPOINTS } from "./endpoints";
import { postNewAccessToken } from "./app";

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
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    const originalRequest = error.config;
    const userIsUnauthorized = error.response.status === 401;
    const tokenHasExpired = userIsUnauthorized && !originalRequest._retry;

    if (userIsUnauthorized && originalRequest.url === ENDPOINTS.user.refreshToken) {
      window.location.replace(ENDPOINTS.public.login);
      return Promise.reject(error);
    }

    if (tokenHasExpired) {
      originalRequest._retry = true;
      const refreshToken = authService.getRefreshToken();

      const newAuthData = await postNewAccessToken(refreshToken!);

      if (newAuthData) {
        authService.setTokens(newAuthData);
        // Set new header for Authorization
        axios.defaults.headers.common["Authorization"] = `Bearer ${newAuthData.access_token}`;
      }

      return axiosApiInstance(originalRequest);
    }

    return Promise.reject(error);
  },
);

export default axiosApiInstance;
