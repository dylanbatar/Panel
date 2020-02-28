import { NgModule } from "@angular/core";

import { AdminlayoutRoutingModule } from "./adminlayout-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { AdminlayoutComponent } from "./adminlayout.component";
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    AdminlayoutComponent
  ],

  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    AdminlayoutComponent
  ],
  imports: [
    SharedModule,
    AdminlayoutRoutingModule
  ]
})
export class AdminlayoutModule {}
