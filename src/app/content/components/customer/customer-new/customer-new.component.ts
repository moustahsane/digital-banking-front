import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CustomerService } from 'src/api/data/services/customer.service';
import { Customer } from 'src/api/data/types/models/Customer';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.scss'],
})
export class CustomerNewComponent implements OnInit {
  customer!: Customer;
  customerForm!: FormGroup;
  submitLoading = false;

  constructor(private fb: FormBuilder,private messageService  :MessageService,private customerService:CustomerService) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.submitLoading = true;

  this.customerService.addCustomer(this.customerForm.value).subscribe({
    next : res=>{

      this.messageService.add({severity:'success', summary:'Customer added', detail:`${this.customerForm.value.name} added succesfully`});
      this.submitLoading = false;


    }
  })
    setTimeout(() => {
      this.submitLoading = false;
    }, 1000);
  }

  public getInputError(ctrlName: string): string | Boolean {
    const errors: any = this.getFormControl(ctrlName);
    if (errors?.required) {
      return `${ctrlName} is required`;
    } else if (errors?.email) {
      return `${ctrlName} not a valid email format`;
    } else if (errors?.minlength) {
      return `${ctrlName} should have at least ${errors?.minlength.requiredLength}`;
    } else return false;
  }
  getFormControl(name: string): ValidationErrors | null | undefined {
    if (this.customerForm?.get(name)?.dirty)
      return this.customerForm?.get(name)?.errors;
    return null;
  }
}
