import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CustomerDTO } from './customer.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
  public customers!:CustomerDTO[];
  public dataSource!:MatTableDataSource<CustomerDTO>;
  public displayedColumns:string[]=['id','name','email','action'];

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private customerService:CustomerService,private router:Router){}

  ngOnInit(): void {
    this.getListCustomers();
    
    
  }

  getListCustomers(){
    this.customerService.getCustomerList().subscribe({
      next:(data)=>{
        this.customers=data;
        this.dataSource=new MatTableDataSource<CustomerDTO>(this.customers);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;

      },error:(err)=>{
          console.log(err);
      }
    })
    
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe({
      next: (data) => {
        // Ici, vous pouvez ajouter des actions après la suppression réussie
        alert("Customer Deleted Successfully");
        // Actualiser la liste des clients ou faire une autre action
        this.getListCustomers(); // Exemple pour recharger la liste des clients
      },
      error: (err) => {
        // Gérer les erreurs
        console.error('Erreur lors de la suppression du client', err);
      }
    });
  }

  handleCustomerAccount(customer:CustomerDTO){
    this.router.navigateByUrl(`/admin/customer-account/${customer.id}`,{state:customer});
  }
  

}
