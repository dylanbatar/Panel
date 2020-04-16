import Swal from "sweetalert2";

export class Alert {
  public static showAlert(icon, title, timer): void {
  Swal.fire({
      icon,
      title,
      timer,
    });
  }
}
