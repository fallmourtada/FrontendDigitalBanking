import { CustomerDTO } from "src/app/customers/customer/customer.model";
import { AccountSatus } from "../enum/AccountSatus.enum";

export class BankAccountDTO{
    id!:number;
    balance!:number;
    createdAt!:Date;
    customerDTO!:CustomerDTO;
    status!:AccountSatus;
    type!:string;
}