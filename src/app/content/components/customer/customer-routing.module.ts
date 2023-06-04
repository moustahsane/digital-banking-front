import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    
    children: [
      {
        path: 'list',
        component: CustomerListComponent,
    
      },
      {
        path: 'new',
        component: CustomerNewComponent,
      
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
