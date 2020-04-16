import { Component, OnInit, AfterContentInit } from "@angular/core";
import { SidebarService } from "src/app/services/sidebar.service";
import { IMenuItem } from "src/app/interfaces/imenuItem.interface";
import { UserService } from "src/app/services/user.service";
import { IUser } from "src/app/interfaces/iuser.interface";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit,AfterContentInit {
  menuItems: IMenuItem[] = [];
  user: IUser;
  constructor(public _sidebar: SidebarService, public _user: UserService) {}

  ngOnInit(): void { 
   
  }
  ngAfterContentInit(){
    this.menuItems = this._sidebar.getMenu();
    this.user = this._user.user;
  }
}
