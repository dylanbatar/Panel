import { Component, OnInit } from "@angular/core";
import { SidebarService } from 'src/app/services/sidebar.service';
import { IMenuItem } from 'src/app/interfaces/imenuItem.interface';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  menuItems: IMenuItem[] = [];

  constructor(public _sidebar: SidebarService) {}

  ngOnInit(): void {

    this.menuItems = this._sidebar.getMenu();

  }
}
