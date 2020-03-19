import { IUser } from "../interfaces/iuser.interface";

export class User {
  constructor(public user: IUser) {
    console.log(this.user);
  }
}
