import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDTO } from './customer/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  public getCustomerList():Observable<CustomerDTO[]>{
    return this.http.get<CustomerDTO[]>("http://localhost:8082/customers");
  }


  public saveCustomer(customer:CustomerDTO):Observable<CustomerDTO>{

    return  this.http.post<CustomerDTO>("http://localhost:8082/customers",customer);
  }

  public deleteCustomer(id:number):Observable<any>{
   return this.http.delete<any>(`http://localhost:8082/customers/${id}`);
  }


  
}
