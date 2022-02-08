import { Component, OnInit } from '@angular/core';
import { employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  dob1 = new Date();

  objEmployee: employee[]=[
  {
      employeeID: 1,
      Firstname: 'Software',
      Lastname: 'Programers',
      salary: 90000,
      DOB: new Date(),
      email: 'angular@gmail.com'
  }

];

showEdit: boolean = true;

  constructor() { }

  Editemp(): any {
    this.showEdit = false;
  }

  Updateemp(): any {
    this.showEdit = true;
  }

  ngOnInit(): void {}

}
