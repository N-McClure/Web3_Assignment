import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardButtonsService {

  constructor() { }

  likeCard(data: any) {
    /* Change colour of element sent in */
    document.getElementById(data)!.style.color = "crimson";
  }
}
