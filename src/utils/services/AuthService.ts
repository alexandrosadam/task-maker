import { AuthRes } from "@api/app";

const defaultAuthData = {
  access_token: null,
  refresh_token: null,
};

class AuthService {
  private data: {
    access_token: string | null;
    refresh_token: string | null;
  };

  constructor() {
    this.data = { ...defaultAuthData };
  }

  setTokens(newData: AuthRes): void {
    this.data = { ...newData };
    localStorage.setItem("access_token", newData.access_token);
    localStorage.setItem("refresh_token", newData.refresh_token);
  }

  removeTokens(): void {
    this.data = { ...defaultAuthData };
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }

  getAccessToken(): string | null {
    return localStorage.getItem("access_token") ?? this.data.access_token;
  }

  getRefreshToken(): string | null {
    return localStorage.getItem("refresh_token") ?? this.data.refresh_token;
  }
}

const authService = new AuthService();

export default authService;
