import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  template: `
  <div>
    <p class="first">Premier paragraphe<p>
    <p class="second">Deuxième paragraphe<p>
    <p class="third" [ngStyle]="style" >Troisième paragraphe<p>
  </div>
  `,
  styleUrls: ['./style.component.css'],
  styles: [`
    .second{
      text-transform: uppercase
    }
  `]
})
export class StyleComponent{
  
  style = { // créer un objet et son style doit être écrit en camelCase
    color : "green",
    fontSize : 22 , // == 22px
    textDecoration : "underline"
  }

  // 1 ajouter du style via des fichiers .css
  // vous pouvez aller dans le fichier style.component.css et y insérer du css
  // tout le css que vous allez écrire dans le fichier ne va DEBORDER sur les autres composants

  // si je veux créer des règles css qui s'applique sur tous les composants

  // il faudra aller modifier le 
  // src/styles.css

  // 2 ajouter une propriété style

  // via une variable 




}
