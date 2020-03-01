import { Component, OnInit, Inject, ElementRef } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { SettingsService } from "src/app/services/settings.service";
import { ITema } from "src/app/interfaces/ithema.interface";

@Component({
  selector: "app-cuenta-config",
  templateUrl: "./cuenta-config.component.html",
  styleUrls: ["./cuenta-config.component.scss"]
})
export class CuentaConfigComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document,
    private _settings: SettingsService
  ) {}

  ngOnInit(): void {}

  // Cambiar el tema del administrador
  changeTheme(tema: string, referencia: ElementRef) {
    this.document
      .getElementById("theme")
      .setAttribute("href", `./assets/css/colors/${tema}.css`);

    this.checkTheme(referencia);
    this.guardarTema({ tema, url: `./assets/css/colors/${tema}.css` });
  }

  // Poniendo chulo de seleccionado a un item
  checkTheme(referencia) {
    let themes = this.document.getElementsByClassName("selector");

    // Quitar check
    for (let theme of themes) {
      theme.classList.remove("working");
    }

    // Agregando Icono de selecionado al Tema que se escogio
    referencia.classList.add("working");
  }

  guardarTema(configuracion: ITema) {
    this._settings.setTema(configuracion);
  }
}
