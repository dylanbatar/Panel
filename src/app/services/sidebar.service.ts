import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IMenuItem } from "../interfaces/imenuItem.interface";

@Injectable({
  providedIn: "root"
})
export class SidebarService {
  private menu: IMenuItem[] = [
    { icon: "", path: "/perfil", name: "Perfil" },
    { icon: "", path: "/dashboard", name: "Dashboard" },
    { icon: "", path: "/graficas", name: "Reportes" },
    { icon: "", path: "/configuracion", name: "Personalizacion" }
  ];

  constructor() {}

  getMenu() {
    return this.menu;
  }
}
