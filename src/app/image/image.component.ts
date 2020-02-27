import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  template: `
    <div>
      <h1>Ajouter des images dans un projet Angular</h1>
      <img src="https://via.placeholder.com/200x100" alt="">
      <br>
      <img src="https://via.placeholder.com/200x100?text=portrait" alt="">
      <br>
      <img src="assets/logo.jpg" alt="" width="20">
      <br>
      <img src="{{urlImage}}" alt="">
      <br>
      <img [src]="urlLastImage" alt="">
    </div>
  `
})
export class ImageComponent{
  // il existe plusieurs manières d'ajouter des images

  // 1 classique en html => balise image url dans l'attribut src
 // le site placeholder.com
 // unsplash
 // 2 télécharger une image 
  // mettre l'image dans le dossier "src/assets"
  // 3 créer une variable !!! 
  urlImage = "https://via.placeholder.com/200x100";
  // 4 directive 
  urlLastImage = "https://via.placeholder.com/200x100" 
}
