// types/user.ts
export interface User {
  id: number;
  name: string;
  email: string;
  mobile?: string;
  location?: string;
  createdAt: Date;
}

export interface CreateUserData {
  name: string;
  email: string;
  password: string;
  mobile?: string;
  location?: string;
}

export interface LoginData {
  email: string;
  password: string;
}
