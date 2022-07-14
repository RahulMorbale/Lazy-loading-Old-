import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomerComponent,
],
  imports: [
    RouterModule.forChild(CustomerRoutes),
    CommonModule,FormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }


