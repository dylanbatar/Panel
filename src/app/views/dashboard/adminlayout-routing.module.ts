import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { AdminlayoutComponent } from "./adminlayout.component";

const routes: Routes = [
  {
    path: "",
    component: AdminlayoutComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "progress", component: ProgressComponent },
      { path: "graficas", component: Grafica1Component },
      { path: "**", pathMatch: "full", redirectTo: "dashboard" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminlayoutRoutingModule {}
