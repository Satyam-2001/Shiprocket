import { ShiprocketApi } from "../../api";
import { EndPoint } from "../../constants/endpoints";
import { ApiClient } from "common/api-client";
import { AuthResponse, LoginCredentials } from "./types";

export class Auth extends ApiClient {
  constructor(baseApi: ShiprocketApi) {
    super(baseApi, EndPoint.AUTH);
  }

  async generateToken(credentials: LoginCredentials): Promise<AuthResponse> {
    return this.api.post("/login", credentials);
  }

  async logout(): Promise<void> {
    return this.api.post("/logout");
  }
}