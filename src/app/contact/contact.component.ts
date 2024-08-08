import { Component, Input } from '@angular/core';

// Imported By Me:
import { contactInfo } from '../sharedDataSetups';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() contacts!: contactInfo;
  
}
