import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IUser } from "../interfaces/iuser.interface";
import { environment } from "src/environments/environment";
import { IResponse } from "../interfaces/iresponse.interface";
import { map } from "rxjs/operators";
import { UserService } from "./user.service";
@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient, private _user: UserService) {}

  public login(email, password): Observable<IResponse<IUser, string>> {
    return this.http
      .post<IResponse<IUser, string>>(`${environment.hostNode}login/singIn`, {
        email,
        password,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  public loginGoogle(token): Observable<IResponse<IUser, string>> {
    return this.http
      .post<IResponse<IUser, string>>(
        `${environment.hostNode}/login/singIn/google`,
        {
          token,
        }
      )
      .pipe(
        map((data) => {
          console.log(data);
          return data;
        })
      );
  }

  public logOut(): void {
    this._user.user = null;
    this._user.token = "";
    localStorage.removeItem("token-hospital");
  }

  public verifyToken(): boolean {
    return localStorage.getItem("token-hospital") ? true : false;
  }

  public lengthToken(): boolean {
    if (!this.verifyToken()) {
      return false;
    }

    const data: { user: IUser; token: string } = JSON.parse(
      localStorage.getItem("token-hospital")
    );

    if (data.token.length > 20) {
      return true;
    }
  }
}
