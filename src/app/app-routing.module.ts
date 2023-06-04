import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routes: Routes = [
  {path: '', component: AppLayoutComponent, children : [
  { path : "customers", loadChildren : () => import('./content/components/customer/customer.module').then(m => m.CustomerModule)}

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
