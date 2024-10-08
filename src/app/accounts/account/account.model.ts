import { OperationType } from "../enum/operation.enum";

export class AccountOperationDTO{
    id!:number;
    operationDate!:Date
    amount!:number;
    type!:OperationType;
    description!:string;

}


export class AccountHistoryDTO{
    id!:number;
    accountOperationDTOS!:AccountOperationDTO[];
    balance!:number;
    currentPage!:number;
    totalPages!:number;
    size!:number;
}