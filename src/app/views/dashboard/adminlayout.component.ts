import { Component } from "@angular/core";
import { SettingsService } from "src/app/services/settings.service";

declare function plugin_init();

@Component({
  selector: "app-adminlayout",
  templateUrl: "./adminlayout.component.html",
  styleUrls: []
})
export class AdminlayoutComponent {
  constructor(private _settings: SettingsService) {
    setTimeout(() => {
      plugin_init();
    }, 1000);
  }
}
