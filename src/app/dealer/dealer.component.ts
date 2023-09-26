import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  read_dealer_Data:any;

  ngOnInit(): void {
    this.service.getAll_dealer_Data().subscribe((res)=>{
      console.log(res, "res==>");
      this.read_dealer_Data = res.dealer_data;
    });
  }

}
