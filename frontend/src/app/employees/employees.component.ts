import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../Services/employees.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  data: any;

  constructor( private employeeService: EmployeesService){}

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData(){
    try{
      this.data = await this.employeeService.getEmployees();
      console.log(this.data);

    }catch(error){
      console.error('Error in the component', error)
    }
  }
  
}
