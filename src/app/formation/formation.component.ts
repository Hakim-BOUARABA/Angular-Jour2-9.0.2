import { Component } from '@angular/core';
import { DataService} from "../data.service"; // le service est dans le parent
@Component({
  selector: 'app-formation',
  template: `
    <div>
      <h1>{{titre}}</h1>
      <p>{{contenu.p}}</p>
      <ul>
        <li *ngFor="let categorie of contenu.liste">{{categorie}}</li>
      </ul>
    </div>
  `
})
export class FormationComponent{
  titre :string;
  contenu ;
  constructor(service : DataService) {
    this.titre = service.getTitre();
    this.contenu = service.getData(); 
   }

  

}
