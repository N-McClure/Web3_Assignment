import { Component, Input } from '@angular/core';

// Inputted Classes by Me:
import { contactInfo } from '../sharedDataSetups';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() contacts!: contactInfo;
}
