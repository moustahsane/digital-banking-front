import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { CustomerService } from 'src/api/data/services/customer.service';
import { Customer } from 'src/api/data/types/models/Customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  customerDialog: boolean = false;

  deleteCustomerDialog: boolean = false;

  deleteCustomersDialog: boolean = false;

  customers: Customer[] = [];

  customer: Customer = {};

  selectedCustomers: Customer[] = [];

  submitted: boolean = false;

  cols: any[] = [];
  colsFreez: any[] = [];

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  constructor(private customerService: CustomerService, private messageService : MessageService,private router : Router) {}

  ngOnInit() {
    this.customerService
      .getCustomers()
      .subscribe((data) => (this.customers = data));

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Customer' },
      { field: 'email', header: 'Email' },
    ];
    this.colsFreez = [
      { field: 'id' }];
  }

  openNew() {
    this.router.navigate(['/customers/new'])
  }


  deleteSelectedCustomers() {
    this.deleteCustomersDialog = true;
  }

  editCustomer(customer: Customer) {
    this.customer = { ...customer };
    this.customerDialog = true;
  }

  deleteCustomer(customer: Customer) {
    this.deleteCustomerDialog = true;
    this.customer = { ...customer };
  }

  confirmDeleteSelected() {
    this.deleteCustomersDialog = false;
    this.customers = this.customers.filter(
      (val) => !this.selectedCustomers.includes(val)
    );
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Customers Deleted',
      life: 3000,
    });
    this.selectedCustomers = [];
  }

  confirmDelete() {
    this.deleteCustomerDialog = false;
    this.customers = this.customers.filter(
      (val) => val.id !== this.customer.id
    );
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Customer Deleted',
      life: 3000,
    });
    this.customer = {};
  }

  hideDialog() {
    this.customerDialog = false;
    this.submitted = false;
  }

  saveCustomer() {
    this.submitted = true;

    if (this.customer.name?.trim()) {
      if (this.customer.id) {
        // @ts-ignore
        // this.customer.inventoryStatus = this.customer.inventoryStatus.value ? this.customer.inventoryStatus.value : this.customer.inventoryStatus;
        this.customers[this.findIndexById(this.customer.id)] = this.customer;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Customer Updated',
          life: 3000,
        });
      } else {

        this.customers.push(this.customer);
        // this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Customer Created', life: 3000 });
      }

      this.customers = [...this.customers];
      this.customerDialog = false;
      this.customer = {};
    }
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }


  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
