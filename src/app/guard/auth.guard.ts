import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../services/login.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private _login: LoginService, private router: Router) {}
  canActivate(): boolean {
    if (!this._login.lengthToken()) {
      console.log("No tienes acceso a esta ruta");
      this.router.navigateByUrl("/login");

      return false;
    }

    return true;
  }
}
