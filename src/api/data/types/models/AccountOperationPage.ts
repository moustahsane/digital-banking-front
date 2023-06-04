import { AccountOperation } from "./AcountOperation";

export interface AccountOperationPage {


    accountBalance?: number;

    currentPage?: number;

    size?: number;

    totalElements?: number;

    totalPages?: number;

    operations?: Array<AccountOperation>;





}