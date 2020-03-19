import Swal from "sweetalert2";

export class Alert {
  icon: string;
  title: string | any;
  timer: number;

  showAlert(icon, title, timer): void {
    Swal.fire({
      icon,
      title,
      timer
    });
  }
}
