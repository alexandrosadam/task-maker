import authService from "@utils/services/AuthService";

type Authentication = {
  isAuthenticated: boolean;
};

const useAuth = (): Authentication => {
  const token = authService.getAccessToken();
  const isAuthenticated = Boolean(token);

  return { isAuthenticated };
};

export default useAuth;
