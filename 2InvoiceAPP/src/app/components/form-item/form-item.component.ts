import { Component, EventEmitter, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Item } from '../../models/item';


@Component({
  selector: 'form-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.css'
})
export class FormItemComponent {
  @Output() addItemEmmiter = new EventEmitter


  private counterId = 4; //id donde se maneja el nuevo producto, ya que hay 3 productos creados en data

  item: any = {
    product: '',
    price: 0,
    quantity: 0,
    
   
  }

  onSubmit(): void{
    this.addItemEmmiter.emit({id: this.counterId, ...this.item})
    this.counterId++

    this.item = {
      product: '',
      price: 0,
      quantity: 0,
      
     
    }
  }
}
