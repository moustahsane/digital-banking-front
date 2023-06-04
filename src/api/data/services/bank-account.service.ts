import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService extends RestService {

  
  constructor(http:HttpClient) {
    
    super(http);
    
  }
}
