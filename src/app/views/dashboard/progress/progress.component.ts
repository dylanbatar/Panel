import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["./progress.component.scss"]
})
export class ProgressComponent implements OnInit {
  progres1: number = 30;
  progres2: number = 80;
  constructor() {}

  ngOnInit(): void {}
}
