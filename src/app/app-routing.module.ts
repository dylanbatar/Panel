import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./views/dashboard/dashboard/dashboard.component";
import { LoginComponent } from "./views/login/login.component";
import { ProgressComponent } from "./views/dashboard/progress/progress.component";
import { Grafica1Component } from "./views/dashboard/grafica1/grafica1.component";
import { NotfoundComponent } from "./shared/notfound/notfound.component";
import { AdminlayoutComponent } from "./views/dashboard/adminlayout.component";
import { RegistroComponent } from './views/registro/registro.component';

const routes: Routes = [
  {
    path: "panel",
    component: AdminlayoutComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "progress", component: ProgressComponent },
      { path: "graficas", component: Grafica1Component }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "404", component: NotfoundComponent },
  { path: "**", pathMatch: "full", redirectTo: "404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
