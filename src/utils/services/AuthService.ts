import { AuthRes } from "@api/app";

const defaultAuthData = {
  token: null,
};

class AuthService {
  private data: {
    token: string | null;
  };

  constructor() {
    this.data = { ...defaultAuthData };
  }

  setTokens(newData: AuthRes): void {
    this.data = { ...newData };
    localStorage.setItem("access_token", newData.token);
  }

  removeTokens(): void {
    this.data = { ...defaultAuthData };
    localStorage.removeItem("access_token");
  }

  getAccessToken(): string | null {
    return localStorage.getItem("access_token") ?? this.data.token;
  }
}

const authService = new AuthService();

export default authService;
