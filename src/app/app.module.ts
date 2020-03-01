import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LoginComponent } from "./views/login/login.component";
import { RegistroComponent } from "./views/registro/registro.component";
import { AdminlayoutModule } from "./views/dashboard/adminlayout.module";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminlayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
