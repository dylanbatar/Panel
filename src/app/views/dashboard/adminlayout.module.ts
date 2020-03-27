import { NgModule } from "@angular/core";

import { AdminlayoutRoutingModule } from "./adminlayout-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { AdminlayoutComponent } from "./adminlayout.component";
import { SharedModule } from "src/app/shared/shared.module";

import { FormsModule , ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { CuentaConfigComponent } from "./cuenta-config/cuenta-config.component";
import { IncrementadorComponent } from "src/app/components/incrementador/incrementador.component";
import { PieChartComponent } from "src/app/components/pie-chart/pie-chart.component";
import { PerfilComponent } from './perfil/perfil.component';


// import { NgxChartsModule } from "@swimlane/ngx-charts";

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    AdminlayoutComponent,
    CuentaConfigComponent,
    IncrementadorComponent,
    PieChartComponent,
    PerfilComponent
  ],

  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    AdminlayoutComponent
  ],
  imports: [
    SharedModule,
    AdminlayoutRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminlayoutModule {}
