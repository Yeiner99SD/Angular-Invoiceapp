import { Component, Input } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'app-cient-view',
  standalone: true,
  imports: [],
  templateUrl: './cient-view.component.html',
  styleUrl: './cient-view.component.css'
})
export class CientViewComponent {

  @Input() client: Client = new Client();

}
