import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-picking-system',
  templateUrl: './picking-system.component.html',
  styleUrls: ['./picking-system.component.css']
})
export class PickingSystemComponent implements OnInit {

  constructor(private service:ApiserviceService) { }
  readproductData:any;

  ngOnInit(): void {
    this.service.getAllData().subscribe((res)=>{
      console.log(res, "res==>");
      this.readproductData = res.data;
    });
  }

}
