import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementDataComponent } from './management-data/management-data.component';
import { ImportStockComponent } from './import-stock/import-stock.component';
import { EmployeeComponent } from './employee/employee.component';
import { DealerComponent } from './dealer/dealer.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { PickingSystemComponent } from './picking-system/picking-system.component';

const routes: Routes = [
  {path: 'management',component:ManagementDataComponent},
  {path: 'import_product',component:ImportStockComponent},
  {path: 'import_product/:import_id',component:ImportStockComponent},
  {path: 'employee',component:EmployeeComponent},
  {path: 'Pdealer',component:DealerComponent},
  {path: 'CreateProduct',component:CreateProductComponent},
  {path: 'CreateProduct/:product_id',component:CreateProductComponent},
  {path: 'PickingSystem',component:PickingSystemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
