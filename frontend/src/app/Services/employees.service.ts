import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private apiUrl = 'http://localhost:5000/api'

  constructor() { }

  async getEmployees() : Promise<any>{
    try{
        const response = await axios.get(`${this.apiUrl}/employee`)
        return  response.data;
    
    }catch(error){
      console.error('Error when fetching data: ', error);
      throw error;
    }
  }

}
