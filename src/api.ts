import axios, {
  AxiosResponse,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
} from "axios";


export interface ShiprocketApiConfig {
  token: string;
  logger?: boolean;
}

export class ShiprocketApi {
  private axiosInstance: AxiosInstance;

  constructor(private readonly config: ShiprocketApiConfig) {
    this.axiosInstance = this.create();
  }

  create(endpoint: string = "") {
    const axiosInstance = axios.create({
      baseURL: `https://apiv2.shiprocket.in/v1/external/${endpoint}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.config.token}`,
      },
    });
    this.setupInterceptors(axiosInstance);
    return axiosInstance;
  }

  public async getAccessToken(data: {
    email: string;
    password: string;
  }): Promise<string> {
    return await this.axiosInstance.post("/auth/login");
  }

  private setupInterceptors(axiosInstance: AxiosInstance): void {
    // Request interceptor
    axiosInstance.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        if (this.config.logger) {
          console.log(`Request: ${config.method?.toUpperCase()} ${config.url}`);
        }
        return config;
      },
      (error) => {
        if (this.config.logger) {
          console.error("Request error:", error);
        }
        return Promise.reject(error);
      }
    );

    // Response interceptor
    axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        if (this.config.logger) {
          console.log(`Response: ${response.status} ${response.config.url}`);
        }
        return response.data;
      },
      (error) => {
        const errorData = error.response?.data || error.message;
        if (this.config.logger) {
          console.error("API Error:", errorData);
        }
        return Promise.reject(errorData);
      }
    );
  }

  public async request<T = any>(
    config: AxiosRequestConfig
  ): Promise<T> {
    return this.axiosInstance.request(config);
  }

  public async get<T = any>(
    endpoint: string,
    params?: Record<string, any>
  ): Promise<T> {
    return this.request({
      method: "GET",
      url: endpoint,
      params,
    });
  }

  public async post<T = any>(
    endpoint: string,
    data?: any
  ): Promise<T> {
    return this.request({
      method: "POST",
      url: endpoint,
      data,
    });
  }

  public async put<T = any>(
    endpoint: string,
    data?: any
  ): Promise<T> {
    return this.request({
      method: "PUT",
      url: endpoint,
      data,
    });
  }

  public async delete<T = any>(endpoint: string): Promise<T> {
    return this.request({
      method: "DELETE",
      url: endpoint,
    });
  }
}
