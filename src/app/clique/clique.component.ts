import { Component } from '@angular/core';

@Component({
  selector: 'app-clique',
  template: `
    <div>
      <button (click)="modificationText()" >Afficher</button>
      <button (click)="masquer()">Masquer</button>
      <p>{{p}}</p>
    </div>
  `
})
export class CliqueComponent{
// envoyer des informations de la vue vers la class 
// au lieu d'utiliser [ ]
// je vais utiliser les ( ) <=======
p : string ;
modificationText(){
  this.p = "je viens de cliquer que le premier bouton";
}
masquer(){
  this.p = ""
}

}
