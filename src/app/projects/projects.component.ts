import { Component, Input } from '@angular/core';

// Imported By Me:
import {CardButtonsService} from '../card-buttons.service';
import { ProjectInfoService } from '../project-info.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
 

  //Declaring the Constructors and their Services:
  constructor(private cardService: CardButtonsService, public projectInfoService: ProjectInfoService, private http: HttpClient){}

  //The project "Liking" Service:
  like(elem: any) { this.cardService.likeCard(elem); }

  //The Project "Info Alerting" Service:
  projectInfo(id: number){this.projectInfoService.projectInfo(id);}


  projects!: any;
  projArray!: any[];

  getLocal(){
    let projUrl = 'assets/data/projects.json';
    this.http.get(projUrl).subscribe((res) => {
      this.projects = res;
      this.projArray = this.projects.project;

      console.log(this.projArray);
    });
  }

  ngOnInit(){
    this.getLocal();
  }

}
