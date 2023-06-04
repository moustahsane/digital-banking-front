import { AccountStatus } from "./enums/AccountStatus";
import { Customer } from "./Customer";

export interface BankAccount {

    id?: string;
    balance?: number;
    createdAt?: string;

    type?: string;
    status?: AccountStatus;
    customer?: Customer;
}