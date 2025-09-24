export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  company_id: number;
  company_name: string;
}
