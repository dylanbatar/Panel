import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Alert } from "src/app/models/alert.model";
import { Router } from "@angular/router";
import { Storage } from "src/app/models/storage.model";

declare const gapi: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  auth2: any;

  alert: Alert = new Alert();
  storage: Storage = new Storage();
  constructor(
    private _login: LoginService,
    private _fb: FormBuilder,
    private router: Router
  ) {
    this.createLoginForm();
  }

  ngOnInit(): void {
 
    this.rememberMe();
    this.googleInit();
  }

  // CONFIGURAR EL SCRIPT DE GOOGLE PARA PODER SACAR EL POPPUP
  googleInit(): void {
    gapi.load("auth2", () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          "536154414229-gbpf9fpqssuv3qncda0anc0rp0kshkfo.apps.googleusercontent.com",
        cookiepolicy: "single_host_origin",
        scope: "profile email"
      });
      this.attachSignin(document.querySelector("#btn-google"));
    });
  }

  // CON ESTE METOOD LE ASIGNAMOS A UN BOTON PERSONALIZADO EL EVENTO DE SINGIN DE GOOGLE
  // POSTERIOIR MENTE LLAMAMOS AL API DE LOGIN Y LE PASAMOS EL TOKEN QUE RECIBIMOS DE RESPUESTa
  attachSignin(element: Element): void {
    this.auth2.attachClickHandler(element, {}, googleUser => {
      // let perfil = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;

      this._login.loginGoogle(token).subscribe(response => {
        if (response.result === null) {
          return this.alert.showAlert("error", response.message, 5000);
        }

        this.storage.saveInStorage("token-hospital", {
          token: response.message,
          user: response.result
        });

        this.router.navigateByUrl("/dashboard");
      });
    });
  }

  createLoginForm(): FormGroup {
    return (this.loginForm = this._fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      remember: [false]
    }));
  }

  singIn(): void {
    this.rememberMe();
    this._login
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(response => {
        if (response.result === null) {
          return this.alert.showAlert("error", response.message, 5000);
        }

        this.storage.saveInStorage("token-hospital", {
          token: response.message,
          user: response.result
        });

        window.location.href = "#/dashboard";
      });
  }

  rememberMe(): void {
    if (this.loginForm.value.remember === true) {
      this.storage.saveInStorage("email", this.loginForm.value.email);
      this.loginForm.value.remember = true;
    }

    if (this.storage.getStorage("email")) {
      this.loginForm.get("email").setValue(this.storage.getStorage("email"));
    }
  }
}
