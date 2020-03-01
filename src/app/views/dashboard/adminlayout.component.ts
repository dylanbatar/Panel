import { Component, OnInit } from "@angular/core";
import { SettingsService } from "src/app/services/settings.service";

@Component({
  selector: "app-adminlayout",
  templateUrl: "./adminlayout.component.html",
  styleUrls: []
})
export class AdminlayoutComponent implements OnInit {
  constructor(private _settings: SettingsService) {}

  ngOnInit(): void {}
}
