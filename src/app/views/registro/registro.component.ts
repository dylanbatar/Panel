import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { comparePassword } from "src/app/validators/createUser.validator";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user.model";
import { IUser } from "src/app/interfaces/iuser.interface";
import { Alert } from "src/app/models/alert.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.scss"]
})
export class RegistroComponent implements OnInit {
  formNewUser: FormGroup;
  alert: Alert = new Alert();

  constructor(
    private _fb: FormBuilder,
    private _user: UserService,
    private router: Router
  ) {
    this.formRegisterNewUser();
  }

  ngOnInit(): void {
    for (const form in this.formNewUser.controls) {
      this.formNewUser.controls[form].setValue("test2@.com");
    }
  }

  private formRegisterNewUser(): FormGroup {
    return (this.formNewUser = this._fb.group(
      {
        name: [null, Validators.required],
        email: [null, Validators.required],
        password: [null, Validators.required],
        password2: [null, [Validators.required]],
        terms: [null, Validators.required]
      },
      { validators: comparePassword }
    ));
  }

  public registerNewUser(): void {
    if (!this.formNewUser.invalid && this.formNewUser.value.terms == false) {
      return Alert.showAlert("warning", "Formulario invalido", 4000);
    }

    let user: IUser = {
      email: this.formNewUser.value.email,
      name: this.formNewUser.value.name,
      password: this.formNewUser.value.password
    };

    this._user.registerNewUser(new User(user)).subscribe(response => {
      if (response.result == null) {
        return Alert.showAlert("warning", response.message, 6000);
      }

      Alert.showAlert("success", response.message, 2000);
      this.router.navigateByUrl("/login");
    });
  }
}
