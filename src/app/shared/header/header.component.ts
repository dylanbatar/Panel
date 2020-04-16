import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { IUser } from "src/app/interfaces/iuser.interface";

declare var gapi;

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  user: IUser;
  auth2: any;

  constructor(
    private _login: LoginService,
    private router: Router,
    public _user: UserService
  ) {}

  ngOnInit(): void {
    console.log("fff");
    this.googleInit();
    this._user.getDataUser().subscribe((v) => {
      console.log(v);
      this.user = v;
    });
  }

  googleInit() {
    gapi.load("auth2", () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          "536154414229-gbpf9fpqssuv3qncda0anc0rp0kshkfo.apps.googleusercontent.com",
        scope: "profile",
      });
    });
  }

  public logOut(): void {
    this._login.logOut();
    this.router.navigateByUrl("/login");
  }

  public logOutGoogle(): void {
    this.auth2.disconnect();
    this.router.navigateByUrl("/login")
  }
}
