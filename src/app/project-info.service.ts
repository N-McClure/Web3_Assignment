import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectInfoService {

  projectInfo(id: number){
    //Switch cases for alerted project description based on id numerical value:
    switch(id){
      case 0:
        alert(`Project Description: This app will allow the User to look at what films are nominated for what awards at this year's (2024) Oscars.`);
        break;
      case 1:
        alert(`Project Description: This app allows the user to enter a value and convert it from one currency type to another.`);
        break;
      case 2:
        alert(' Project Description: This app will allow the user to upload an Image to remove the background of and then download the new/updated Image.');
        break;
      case 3:
        alert(`Project Description: This site is the third version of my portfolio / personal website. I am once again changing the design and am gonna make this one have a responsive Layout.`);
        break;
      case 4:
        alert(`Project Description: This app allows you to write content in a text box and then save it as a variety of different File types.`);
        break;
    }
  }
}
