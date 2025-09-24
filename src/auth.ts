import axios, { AxiosInstance, AxiosResponse } from "axios";

export interface ShiprocketAuthConfig {
  clientId: string;
  clientSecret: string;
  baseAuthUrl?: string; // Make base URL configurable
}

export interface TokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  api_domain: string;
  token_type: string;
}

export interface RefreshTokenResponse
  extends Omit<TokenResponse, "refresh_token"> {
  // Same as TokenResponse but without refresh_token
}

export class ShiprocketAuth {
  private readonly api: AxiosInstance;

  constructor(config: ShiprocketAuthConfig) {
    this.api = axios.create({
      baseURL:
        config.baseAuthUrl || "https://accounts.shiprocket.in/oauth/v2/token",
      params: {
        client_id: config.clientId,
        client_secret: config.clientSecret,
      },
    });
  }

  /**
   * Exchange authorization code for access token
   * @param params Object containing code and redirect_uri
   * @returns Promise with TokenResponse
   */
  async getToken(params: {
    code: string;
    redirect_uri: string;
  }): Promise<TokenResponse> {
    try {
      const response: AxiosResponse<TokenResponse> = await this.api.post(
        "",
        null,
        {
          params: {
            ...params,
            grant_type: "authorization_code",
          },
        },
      );

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `Failed to get token: ${error.response?.data?.error || error.message}`,
        );
      }
      throw new Error("Unknown error occurred while getting token");
    }
  }
}
