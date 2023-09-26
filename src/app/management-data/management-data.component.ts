import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-management-data',
  templateUrl: './management-data.component.html',
  styleUrls: ['./management-data.component.css']
})


export class ManagementDataComponent implements OnInit {
  //public view1!: string;
  constructor(private service:ApiserviceService) { }
  readproductData:any;
  readempData:any;
  sucessmsg:any;

  ngOnInit(): void {

    this.service.getAllData().subscribe((res)=>{
      console.log(res, "res==>");
      this.readproductData = res.data;
    });
    
  }
  //getallData
  getAlldata() {
    this.service.getAllempData().subscribe((res)=>{
      console.log(res, "res==>");
      this.readproductData = res.data;
    });
  }

  //get delete
  deleteProductID(product_id:any){
    console.log(product_id,'Delete product_id ==>');
    this.service.deleteData(product_id).subscribe((res)=>{
      console.log(res, "deleteres==>");
      // this.sucessmsg = res.messsage;
      this.getAlldata();
    });
  }



}
