import { Component } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-final',
  template: `
  <div>
    <h2>{{titre}}</h2>
    <p>{{contenu.p}}</p>
    <section>
      <img [src]="urlImg" alt="" (click)="show()">
      <img [src]="urlImg2" alt="" (click)="hide()">
    </section>
    <ul [ngStyle]="visibility">
      <li *ngFor="let a of contenu.liste">{{a}}</li>
    </ul>
  </div>`,
  styles:[`
    section{
      display:flex;
      justify-content: space-around
    }
  `]
})
export class FinalComponent {
  contenu;
  titre ;
  urlImg = "https://via.placeholder.com/150x80?text=afficher";
  urlImg2 = "https://via.placeholder.com/150x80?text=masquer";
  visibility = {display : "none"}

  constructor(service : DataService) {
    this.contenu = service.getData();
    this.titre = service.getTitre();
   }

   show(){
     this.visibility.display = "block"
   }
   hide(){
    this.visibility.display = "none"
  }

}
