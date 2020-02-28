import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./views/login/login.component";
import { NotfoundComponent } from "./shared/notfound/notfound.component";
import { RegistroComponent } from './views/registro/registro.component';

const routes: Routes = [  
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "404", component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
