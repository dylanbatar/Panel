import { AbstractControl, FormGroup } from "@angular/forms";

export function comparePassword(form: FormGroup) {
  if (form.get("password").value != form.get("password2").value) {
    return { invalid: true };
  }

  return null;
}
