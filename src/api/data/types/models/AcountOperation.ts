import { OperationType } from "../enums/operationType";


export interface AccountOperation {

    operationDate?: string;
    amount?: number;
    description?: string;
    type?: OperationType;
}