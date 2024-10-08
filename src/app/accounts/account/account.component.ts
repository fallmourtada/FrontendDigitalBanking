import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';
import { Observable } from 'rxjs';
import { AccountHistoryDTO } from './account.model';
import { NotificationService } from 'src/app/authService/notification.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
  searchAccountForm!:FormGroup;
  currentPage:number=0;
  pageSize:number=5;
  AccountHistory!:Observable<AccountHistoryDTO>;
  operationFormGroup!:FormGroup;

  constructor(private fb:FormBuilder,
    private accountService:AccountService,
    private notificationService:NotificationService
  ){}
  ngOnInit(): void {
    this.searchAccountForm=this.fb.group({
      accountId:this.fb.control('')
    });

    this.operationFormGroup=this.fb.group({
      operationType:this.fb.control(''),
      amount:this.fb.control(''),
      description:this.fb.control(''),
      accountDestination:this.fb.control(''),
      accountId:this.fb.control('')
    })
    

  }

  handleSearchAccount(){
    let accountId=this.searchAccountForm.value.accountId;
    this.AccountHistory=this.accountService.getAccount(accountId,this.currentPage,this.pageSize);

  }

  gotoPage(page:number){
    this.currentPage;
    this.handleSearchAccount();
  }



  handleAccountOperation(){
    let accountId=this.searchAccountForm.value.accountId;
    let operationType=this.operationFormGroup.value.operationType;
    let formData=this.operationFormGroup.value;
    if(operationType=='DEBIT'){
     
      this.accountService.debiterCompte(accountId,formData).subscribe({
        next:(data)=>{
          this.notificationService.showMessage("Debit Effectuer Avec Succes")
          this.handleSearchAccount();
          console.log("DEBIT"+this.operationFormGroup.value);

        },error:(err)=>{
          console.log(err);
        }
      })

    }else if(operationType=='CREDIT'){
      this.accountService.crediterCompte(accountId,formData).subscribe({
        next:(data)=>{
          this.notificationService.showMessage("Credit Effectuer Avec Success")
          this.handleSearchAccount();
          console.log("CREDIT"+this.operationFormGroup.value);
        },error:(err)=>{
          
          console.log(err);
        }
      })

    }else if(operationType=='TRANSFERT'){
      let formData=this.operationFormGroup.value;
      // formData.set('operationType',this.operationFormGroup.value.operationType);
      // formData.set('description',this.operationFormGroup.value.description);
      // formData.set('amount',this.operationFormGroup.value.amount);
      // formData.set('accountId',this.searchAccountForm.value.accountId);
      // formData.set('accountDestination',this.operationFormGroup.value.accountDestination);
      this.accountService.tranfert(accountId,formData).subscribe({
        next:(data)=>{
          this.notificationService.showMessage("Transfert Effectuer Avec Success");
          //this.handleAccountOperation();

        },error:(err)=>{
          console.log(err);
        }
      })
    }

  }

}
