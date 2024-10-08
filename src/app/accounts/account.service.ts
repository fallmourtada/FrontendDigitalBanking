import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountHistoryDTO } from './account/account.model';
import { DebitDTO } from './model/debit.model';
import { CreditDTO } from './model/credit.model';
import { TransfertDTO } from './model/transfert.model';
import { BankAccountDTO } from './model/bankAccount.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  public getAccount(accountId:string,page:number,size:number):Observable<AccountHistoryDTO>{
    return this.http.get<AccountHistoryDTO>("http://localhost:8082/accounts/"+accountId+"/pageOperations?page="+page+"&size="+size);
  }

  public debiterCompte(accountId:number,data:DebitDTO){
   return this.http.post(`http://localhost:8082/accounts/debiter/${accountId}`,data);
  }

  public crediterCompte(accountId:number,data:CreditDTO){
    return this.http.post(`http://localhost:8082/accounts/crediter/${accountId}`,data);
  }

  public tranfert(accountId:number,tranfertDTO:any){
    return this.http.post(`http://localhost:8082/accounts/transfertSimplifier/${accountId}`,tranfertDTO);
  }

  public getListBankAccountByCustomerId(customerId:number):Observable<BankAccountDTO[]>{
    return this.http.get<BankAccountDTO[]>(`http://localhost:8082/bankAccount/customers/${customerId}`);
  }
  
}
