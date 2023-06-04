import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";


export const serverURL : string = environment.server_URL

export class RestService {
  
  constructor(protected http:HttpClient ) { 

  }
}
