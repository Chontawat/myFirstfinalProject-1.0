import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiserviceService } from "../apiservice.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-import-stock',
  templateUrl: './import-stock.component.html',
  styleUrls: ['./import-stock.component.css']
})
export class ImportStockComponent implements OnInit {

  constructor(private service:ApiserviceService , private router:ActivatedRoute) { }
  readproductData:any;
  read_import_product_Data:any;
  errormsg:any;
  get_imp_product_id:any;
  successmsg:any;
  

  ngOnInit(): void {
    this.service.getAllData().subscribe((res)=>{
      console.log(res, "res==>");
      this.readproductData = res.data;
    });

    this.service.getAll_import_product_Data().subscribe((res)=>{
      console.log(res, "res==>");
      this.read_import_product_Data = res.import_product_data;
    });

    // update import product data
    console.log(this.router.snapshot.paramMap.get('import_id'),'get_import_id')
    this.get_imp_product_id = this.router.snapshot.paramMap.get('import_id');
    if (this.get_imp_product_id) {
      this.service.create_import_product_Data(this.get_imp_product_id).subscribe((res)=>{
        console.log(res, 'res=>');
        this.get_imp_product_id.patchValue({

          imp_pID:res.import_product_data[0].import_id,
          im_pro_id:res.import_product_data[0].product_id,
          pro_name:res.import_product_data[0].product_name,
          emp_id:res.import_product_data[0].employee_id,
          dealer_id:res.import_product_data[0].dealer_id,
          DO_IM:res.import_product_data[0].date_of_import,
          DO_T:res.import_product_data[0].date_of_transport,
          amount:res.import_product_data[0].amount,
          price:res.import_product_data[0].price,
          total:res.import_product_data[0].total
        })
      });
    }
  }


  imp_product_Form = new FormGroup({
    'import_id' : new FormControl('',Validators.required),
    'product_id' : new FormControl('',Validators.required),
    'product_name' : new FormControl('',Validators.required),
    'Tproduct_id' : new FormControl('',Validators.required),
    'employee_id' : new FormControl('',Validators.required),
    'dealer_id' : new FormControl('',Validators.required),
    'date_of_import' : new FormControl('',Validators.required),
    'date_of_transport' : new FormControl('',Validators.required),
    'amount' : new FormControl('',Validators.required),
    'price' : new FormControl('',Validators.required),
    'total' : new FormControl('',Validators.required)

  });

  create_import_product_Data(){
    if (this.imp_product_Form.valid) {
      console.log(this.imp_product_Form.value);
      this.service.create_import_product_Data(this.imp_product_Form.value).subscribe((res)=>{
        console.log(res, 'res=>');
        this.imp_product_Form.reset();
        //this.successmsg = res.message;
        
      });
    } else {
      this.errormsg = "All field is required !";
    }

  }
  //upadte import_product data
  import_product_productUpdate(){
    console.log(this.imp_product_Form.value,'updatedform');
    if (this.imp_product_Form.valid) {
      this.service.updateData(this.imp_product_Form.value, this.get_imp_product_id).subscribe((res)=>{
        console.log(res,'resUpdated');
        this.successmsg = res.message;
        
      });
    } else {
      this.errormsg = "All field is required !";
    }
  }


}
