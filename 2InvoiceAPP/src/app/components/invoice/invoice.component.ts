import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { CientViewComponent } from '../cient-view/cient-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';


import { TableItemsComponent } from '../table-items/table-items.component';
import { TotalComponent } from '../total/total.component';
import { FormItemComponent } from '../form-item/form-item.component';
import { Item } from '../../models/item';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CientViewComponent, CompanyViewComponent, InvoiceViewComponent,  TableItemsComponent, TotalComponent, FormItemComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {

  invoice!: Invoice

  constructor(private serviceI: InvoiceService){}
  
  ngOnInit(): void {
    this.invoice = this.serviceI.getInvoice()
  }

  removeItem(id: number){
    this.invoice = this.serviceI.remove(id)
  }

  addItem(item : Item){
    this.invoice = this.serviceI.save(item)
  }


}





