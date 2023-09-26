import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagementDataComponent } from './management-data/management-data.component';
import { ImportStockComponent } from './import-stock/import-stock.component';
import { EmployeeComponent } from './employee/employee.component';
import { DealerComponent } from './dealer/dealer.component';

import { HttpClientModule } from "@angular/common/http";
import { ApiserviceService } from "./apiservice.service";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CreateProductComponent } from './create-product/create-product.component';
import { PickingSystemComponent } from './picking-system/picking-system.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagementDataComponent,
    ImportStockComponent,
    EmployeeComponent,
    
    DealerComponent,
    CreateProductComponent,
    PickingSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
