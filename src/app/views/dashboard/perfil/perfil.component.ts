import { Component, OnInit, SimpleChanges } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { IUser } from "src/app/interfaces/iuser.interface";
import { FormGroup, FormBuilder, Form } from "@angular/forms";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.component.html",
  styles: [],
})
export class PerfilComponent implements OnInit {
  user: IUser;
  token: string;
  form: FormGroup;
  constructor(public _user: UserService, private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.user = this._user.getDataUser()["user"];
    this.token = this._user.getDataUser()["token"];
    this.initFormProfile();
    this._checkGoogleEmail();
  }

  initFormProfile(): FormGroup {
    this.form = this._fb.group({
      email: [this.user.email],
      user: [this.user.name],
    });

    return this.form;
  }

  updateProfile(): void {

    console.log(this.form.value.user);
    

    this.user.name = this.form.value.user;
    this.user.email = this.form.value.email;

    this._user
      .updateUser(this.user, this.token)
      .subscribe((v) => console.log(v));
  }

  // si el email es de google no puede cambiarse
  _checkGoogleEmail(): void {
    this.user.google ? this.form.controls["email"].disable() : false;
  }
}
