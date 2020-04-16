import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import { environment } from "src/environments/environment";
import { IUser } from "../interfaces/iuser.interface";
import { Observable, of } from "rxjs";
import { IResponse } from "../interfaces/iresponse.interface";
import { map } from "rxjs/operators";
import { Alert } from "../models/alert.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public user: IUser;
  public token: string;
  public alert: Alert = new Alert();
  constructor(private http: HttpClient) {
    this.getDataUser()
  }

  public registerNewUser(user: User): Observable<IResponse<IUser, string>> {
    return this.http
      .post<IResponse<IUser, string>>(
        `${environment.hostNode}/user/createUser`,
        {
          name: user.user.name,
          email: user.user.email,
          password: user.user.password,
        }
      )
      .pipe(
        map((data) => {
          console.log(data.result);
          return data;
        })
      );
  }

  public updateUser(user: IUser): Observable<IResponse<IUser, string>> {
    console.log(user);

    return this.http
      .put<IResponse<IUser, string>>(
        `${environment.hostNode}user/updateUser/${user._id}?token=${this.token}`,
        { name: user.name }
      )
      .pipe(
        map((data) => {
          if (data.message === "Modificado") {
            Alert.showAlert("success", data.message, 2000);
            this.updateStorageUser(data.result, this.token);
          }
          return data;
        })
      );
  }

  public getDataUser(): Observable<IUser> {
    if (!localStorage.getItem("token-hospital")) {
      return (this.user = null);
    }
    this.user = JSON.parse(localStorage.getItem("token-hospital"))["user"];
    this.token = JSON.parse(localStorage.getItem("token-hospital"))["token"];
    return of(this.user);
  }

  private updateStorageUser(user: IUser, token: string): void {
    localStorage.setItem("token-hospital", JSON.stringify({ user, token }));
    this.getDataUser();
  }
}
