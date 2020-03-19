import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private _login: LoginService, private router: Router) {}

  ngOnInit(): void {}

  public logOut(): void {
    this._login.logOut();
    this.router.navigateByUrl("/login");
  }
}
