import { Component, OnInit } from "@angular/core";
import { SidebarService } from "src/app/services/sidebar.service";
import { IMenuItem } from "src/app/interfaces/imenuItem.interface";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  menuItems: IMenuItem[] = [];

  constructor(public _sidebar: SidebarService, public _user: UserService) {}

  ngOnInit(): void {
    this.menuItems = this._sidebar.getMenu();
  }
}
