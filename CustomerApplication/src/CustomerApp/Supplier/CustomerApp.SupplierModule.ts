import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SupplierComponent } from './CustomerApp.SupplierComponent';
import { SupplierRoutes } from '../Routing/CustomerApp.SupplierRouting';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SupplierComponent,
],
  imports: [
    RouterModule.forChild(SupplierRoutes),
    CommonModule,FormsModule
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }


