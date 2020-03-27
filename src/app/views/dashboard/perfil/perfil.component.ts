import { Component, OnInit } from "@angular/core";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.component.html",
  styles: []
})
export class PerfilComponent implements OnInit {
  constructor(public _user: UserService) {}

  ngOnInit(): void {}
}
