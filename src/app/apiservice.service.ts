import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient ) {}
  //connect frontend to backend
  apiUrl = 'http://localhost:3000/product'
  apiUrlemp = 'http://localhost:3000/employee'
  import_productUrl ='http://localhost:3000/import_product'
  dealerUrl = 'http://localhost:3000/dealer'

  //get all data//
  getAllData():Observable<any>{
    return this._http.get(`${this.apiUrl}`);
  }

  //get all employee data//
  getAllempData():Observable<any>{
    return this._http.get(`${this.apiUrlemp}`);
  }

  //get all import_product data//
  getAll_import_product_Data():Observable<any>{
    return this._http.get(`${this.import_productUrl}`);
  }

  getAll_dealer_Data():Observable<any>{
    return this._http.get(`${this.dealerUrl}`);
  }

  //create data//
  createData(data:any):Observable<any>{
    console.log(data,'createapi=>')
    return this._http.post(`${this.apiUrl}`,data);
  }
  
  //create import_product_data//
  create_import_product_Data(import_product_data:any):Observable<any>{
    console.log(import_product_data,'createapi=>')
    return this._http.post(`${this.import_productUrl}`,import_product_data);
  }

  //delete data//
  deleteData(product_id:any):Observable<any>{
    let pId = product_id;
    return this._http.delete(`${this.apiUrl}/${pId}`);
  }

  //update data//
  updateData(data:any, product_id:any):Observable<any>{
    let pId = product_id;
    return this._http.put(`${this.apiUrl}/${pId}`,data);
  }

  //get single product data//
  getSingleData(product_id:any):Observable<any>{
    let pId = product_id;
    return this._http.get(`${this.apiUrl}/${pId}`);
  }

  //get single import_product_data//
  get_import_product_SingleData(import_id:any):Observable<any>{
    let imp_pro_Id = import_id;
    return this._http.get(`${this.import_productUrl}/${imp_pro_Id}`);
  }
}
