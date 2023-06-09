import { Injectable } from '@angular/core';
import { RestService,serverURL } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../types/models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends RestService {


  constructor(http:HttpClient) {

    super(http);

  }


  getCustomers(){
    return this.http.get<Array<Customer>>(`${serverURL}/customers`)
  }
 addCustomer(customer:any){
    return this.http.post<Customer>(`${serverURL}/customers`, customer)
  }
}
