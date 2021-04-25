import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: []
})
export class AdminModule { }
