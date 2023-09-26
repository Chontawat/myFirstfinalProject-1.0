import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiserviceService } from "../apiservice.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }
  errormsg:any;
  successmsg:any;
  getProduct_id:any;

  ngOnInit(): void {
    this.getProduct_id = this.router.snapshot.paramMap.get('product_id');
    if (this.getProduct_id) {
      this.service.getSingleData(this.getProduct_id).subscribe((res)=>{
        console.log(res, 'res=>');
        this.productForm.patchValue({
          product_id:res.data[0].product_id,
          product_name:res.data[0].product_name,
          Tproduct_id:res.data[0].Tproduct_id,
          dealer_id:res.data[0].dealer_id,
          price:res.data[0].price,
          c_unit:res.data[0].c_unit
        })
      });
    }
  }

  productForm = new FormGroup({
    'product_id' : new FormControl('',Validators.required),
    'product_name' : new FormControl('',Validators.required),
    'Tproduct_id' : new FormControl('',Validators.required),
    'dealer_id' : new FormControl('',Validators.required),
    'price' : new FormControl('',Validators.required),
    'c_unit' : new FormControl('',Validators.required)

  });

  productSubmit(){
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      this.service.createData(this.productForm.value).subscribe((res)=>{
        console.log(res, 'res=>');
        this.productForm.reset();
        //this.successmsg = res.message;
        
      });
    } else {
      this.errormsg = "All field is required !";
    }

  }

  //upadte data
  productUpdate(){
    console.log(this.productForm.value,'updatedform');
    if (this.productForm.valid) {
      this.service.updateData(this.productForm.value, this.getProduct_id).subscribe((res)=>{
        console.log(res,'resUpdated');
        this.successmsg = res.message;
        
      });
    } else {
      this.errormsg = "All field is required !";
    }
  }

}
