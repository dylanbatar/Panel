import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private _login: LoginService,
    private router: Router,
    public _user: UserService
  ) {}

  ngOnInit(): void {}

  public logOut(): void {
    this._login.logOut();
    this.router.navigateByUrl("/login");
  }
}
