import { BankAccount } from "./BankAccount";

export interface SavingAccount extends  BankAccount{

   interestRate?:number;
}