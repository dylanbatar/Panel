import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { DashboardComponent } from './views/dashboard/dashboard/dashboard.component';
import { ProgressComponent } from './views/dashboard/progress/progress.component';
import { Grafica1Component } from './views/dashboard/grafica1/grafica1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { AdminlayoutComponent } from './views/dashboard/adminlayout.component';
import { RegistroComponent } from './views/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    AdminlayoutComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
