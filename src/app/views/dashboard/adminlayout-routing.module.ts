import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { AdminlayoutComponent } from "./adminlayout.component";
import { CuentaConfigComponent } from "./cuenta-config/cuenta-config.component";
import { AuthGuard } from "src/app/guard/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: AdminlayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        data: { titulo: "Dashboard", descripcion: "" }
      },
      {
        path: "progress",
        component: ProgressComponent,
        data: { titulo: "Dashboard", descripcion: "" }
      },
      {
        path: "graficas",
        component: Grafica1Component,
        data: { titulo: "Graficas", descripcion: "" }
      },
      {
        path: "configuracion",
        component: CuentaConfigComponent,
        data: { titulo: "Configuracion", descripcion: "" }
      },
      { path: "**", pathMatch: "full", redirectTo: "dashboard" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminlayoutRoutingModule {}
