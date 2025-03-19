import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component'

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    MatCardModule,
    OrderRoutingModule
  ],
  exports: [OrderComponent]
})
export class OrderModule { }
