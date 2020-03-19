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
  constructor(private http: HttpClient) {}

  registerNewUser(user: User): Observable<IResponse<IUser, string>> {
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
}
