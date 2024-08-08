import { Component, Input } from '@angular/core';

// Imported By Me:
import { contactInfo } from '../sharedDataSetups';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() contacts!: contactInfo;
}
