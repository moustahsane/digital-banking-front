import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountOperationService extends RestService {

  
  constructor(http:HttpClient) {
    
    super(http);
    
  }

}
