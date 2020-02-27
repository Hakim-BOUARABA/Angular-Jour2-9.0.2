import { Component } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-portfolio',
  template: `
  <div>
    <h2>{{titre}}</h2>
    <figure>
      <img [src]="urlImg" alt="">
    </figure>
    <p>Compétences</p>
    <div>
      <button (click)="show()">show</button>
      <button (click)="hide()">hide</button>
    </div>
    <ul [ngStyle]="visibilityCompetence">
      <li *ngFor="let competence of competences">{{competence}}</li>
    </ul>
  </div>
  `,
  styles: [`
    img{
      border-radius: 15px;
    }
    p{
      font-size: 25px;
      color: blue;
    }
    ul{
      margin:0;
      padding:0;
    }
    li{
      list-style:none;
    }
  `]
})
export class PortfolioComponent  {
  titre = "Titre"
  urlImg = "https://via.placeholder.com/300x200"
  competences ;

  visibilityCompetence = {
    display : "none"
  }

  constructor(service : DataService) {
    this.competences = service.getData().liste
   }

   hide(){
    this.visibilityCompetence = {
      display :"none"
    }
   }

   show(){
    this.visibilityCompetence = {
      display: "block"
    }
   }
}
