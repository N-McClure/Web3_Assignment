import { Component, Input } from '@angular/core';

// Imported Classes Made by Me:
import { contactInfo } from './sharedDataSetups';
import contentData from '../assets/data/content.json'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment_4';

  // Filling the Class Objects with Data and then assigning them to Variables:

  // Contact Info:
  contacts:contactInfo = {
    first: "Nick",
    last: "McClure",
    email: "nmcclure0330@gmail.com",
    github: "https://github.com/N-McClure",
    linkedin: "https://www.linkedin.com/in/nick-mcclure-578565295/",
    youtube: "https://www.youtube.com/@NickMcClure_ProgrammingGuy"
  }

  
  lightMode : boolean = false;
  bgMode = 'dark-mode';

  LightMode() {
    if(this.lightMode = true){
      this.bgMode = 'light-mode';
    }
    else if(this.lightMode = false){
      this.bgMode = 'dark-mode';
    }
  }

  //projects: projectInfo[] = projectData.projects;
  contents: contactInfo = contentData.content;

}
