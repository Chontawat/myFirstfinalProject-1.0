import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  constructor(private service:ApiserviceService) { }
  readempData:any;
  sucessmsg:any;

  ngOnInit(): void {
    this.service.getAllempData().subscribe((res)=>{
      console.log(res, "res==>");
      this.readempData = res.emp_data;
    });
  }


}
