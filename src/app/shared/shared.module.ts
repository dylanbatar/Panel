import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { HeaderComponent } from "./header/header.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { PipeModule } from "../pipes/pipe.module";

@NgModule({
  declarations: [
    [BreadcrumbsComponent, HeaderComponent, NotfoundComponent, SidebarComponent]
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    NotfoundComponent,
    SidebarComponent
  ],
  imports: [CommonModule, RouterModule, PipeModule]
})
export class SharedModule {}
