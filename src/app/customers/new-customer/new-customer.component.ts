import { Component ,OnInit} from '@angular/core';
import { CustomerService } from '../customer.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit{
  saveCustomerForm!:FormGroup;
  constructor(private customerService:CustomerService,
    private fb:FormBuilder
  ){}

  ngOnInit(){
    this.saveCustomerForm=this.fb.group({
      name:this.fb.control(''),
      email:this.fb.control('')
    });
  }

  saveCustomer(){
    let formData=this.saveCustomerForm.value;
    this.customerService.saveCustomer(formData).subscribe({
      next:(data)=>{
        alert("customer Saved Successfully");
      },error:(err)=>{
        console.log(err);
      }
    })
  }

}
