import { BankAccount } from "./BankAccount";

export interface CurrentAccount extends  BankAccount{

   overDraft?:number;
   
}