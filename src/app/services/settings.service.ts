import { Injectable } from "@angular/core";
import { ITema } from "../interfaces/ithema.interface";

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  tema: ITema = this.getTema();

  constructor() {
    this.sendToIndexTheme();
  }

  public setTema(configuracion: ITema): void {
    localStorage.setItem("theme-setting-panel", JSON.stringify(configuracion));
    this.tema = this.getTema();
  }

  public getTema(): ITema {
    return localStorage.getItem("theme-setting-panel")
      ? JSON.parse(localStorage.getItem("theme-setting-panel"))
      : { tema: "default", url: "" };
  }

  /** Coger la url del tema que tenga la variable tema para luego mandarla en el index
   *principal de la app y poder ver el tema
   */
  private sendToIndexTheme():void {
    document.getElementById("theme").setAttribute("href", this.tema.url);
  }
}
