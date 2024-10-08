import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerDTO } from '../customer/customer.model';
import { AccountService } from 'src/app/accounts/account.service';
import { BankAccountDTO } from 'src/app/accounts/model/bankAccount.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css']
})
export class CustomerAccountsComponent implements OnInit{
  customerId!:number;
  customers!:CustomerDTO;
  CustomerAccount!:BankAccountDTO[];
  dataSource!:MatTableDataSource<BankAccountDTO>;
  displayedColumns:string[]=['id','balance','createdAt','status','name','email'];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private activatedRoute:ActivatedRoute,
    private router:Router,
    private accountService:AccountService){
    this.customers=this.router.getCurrentNavigation()?.extras.state as CustomerDTO;
  }

  ngOnInit(): void {
    this.customerId=this.activatedRoute.snapshot.params['id'];
    this.getListBankAccountByCustomerId();
    
  }

  getListBankAccountByCustomerId(){
    this.accountService.getListBankAccountByCustomerId(this.customerId).subscribe({
      next:(data)=>{
        this.CustomerAccount=data;
        this.dataSource=new MatTableDataSource<BankAccountDTO>(this.CustomerAccount);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;

      },error:(err)=>{

      }
    })
  }

}
