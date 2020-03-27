import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import { environment } from "src/environments/environment";
import { IUser } from "../interfaces/iuser.interface";
import { Observable } from "rxjs";
import { IResponse } from "../interfaces/iresponse.interface";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  user: IUser;
  constructor(private http: HttpClient) {
    this.setUser();
  }

  public registerNewUser(user: User): Observable<IResponse<IUser, string>> {
    console.log(user);
    return this.http
      .post<IResponse<IUser, string>>(
        `${environment.hostNode}/user/createUser`,
        {
          name: user.user.name,
          email: user.user.email,
          password: user.user.password
        }
      )
      .pipe(
        map(data => {
          console.log(data.result);
          return data;
        })
      );
  }

  // public getDataUser(): IUser {
  //   this.setUser();
  //   return this.user;
  // }

  private setUser(): void {
    if (localStorage.getItem("token-hospital")) {
      this.user = JSON.parse(localStorage.getItem("token-hospital")).user;
    }
    console.log(this.user);
  }
}
