import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from './layout/service/app.layout.service';
import { CustomerService } from 'src/api/data/services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig,private layoutService : LayoutService,private customerService:CustomerService) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.layoutService.config.ripple = true
        this.layoutService.config.scale = 12
        document.documentElement.style.fontSize = this.layoutService.config.scale + "px"
      this.customerService.getCustomers().subscribe({ 
        next : (resp) => {
          console.table(resp);
           
        }
      })

    }
}
