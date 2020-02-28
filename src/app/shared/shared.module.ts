import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [[BreadcrumbsComponent,HeaderComponent,NotfoundComponent,SidebarComponent]],
  exports:[BreadcrumbsComponent,HeaderComponent,NotfoundComponent,SidebarComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
