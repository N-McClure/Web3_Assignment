import { Component, Input } from '@angular/core';

// Imported By Me:
import { contactInfo } from '../sharedDataSetups';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Input() contacts!: contactInfo;

  message: string = "I am a Software Engineer, Web Developer, and Computer Nerd from Brantford Ontario who likes to build cool things with different technologies. I am a firm believer that side projects are the best way for developers to practice their skills and grow. When I am not working or attending class I can often be found working on my own projects to keep my skills sharp and keep up with the newest advancements in Tech.I am currently finishing up my Second year at Sheridan College studying Computer Programming and will begin my journey into a Cyber-Security Bachelor's degree program in September of 2024.";

}
