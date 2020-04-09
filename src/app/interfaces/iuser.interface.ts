export interface IUser {
  name: string;
  email: string;
  password: string;
  state?: boolean;
  img?: string;
  google?: boolean;
  role?: string;
  _id?: string;
}
