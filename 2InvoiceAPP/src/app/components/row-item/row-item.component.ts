import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';


@Component({
  selector: 'tr[row-item]',
  standalone: true,
  imports: [],
  templateUrl: './row-item.component.html',
  styleUrl: './row-item.component.css'
})
export class RowItemComponent {

  @Input() item!: Item;
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter()

  onRemove(id: number){
    this.removeEventEmitter.emit(id)
  }

}
