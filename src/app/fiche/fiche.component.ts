import { Component } from '@angular/core';
@Component({
  selector: 'app-fiche',
  template: `<div>
    <img [src]="urlFicheProduit" alt="">
    <button (click)="show()">Afficher</button>
    <button (click)="hide()">Masquer</button>
    <p>{{description}}</p>
  </div>`
})
export class FicheComponent {
  urlFicheProduit = "https://via.placeholder.com/500x300?text=fiche"
  description = "";
  show(){
      this.description = "description du produit"
  }
  hide(){
    this.description = ""
  }
}
