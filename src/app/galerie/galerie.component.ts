import { Component } from '@angular/core';

@Component({
  selector: 'app-galerie',
  template: `
    <div>
      <img [src]="urlImgPrincipale" alt="" class="principal">
      <section>
        <img [src]="urlImg1" alt="" (click)="changeImage($event)">
        <img [src]="urlImg2" alt="" (click)="changeImage($event)">
        <img [src]="urlImg3" alt="" (click)="changeImage($event)">
      </section>
    </div>
  `,
  styles: [`section{
    display:flex;
    justify-content:space-between;
  }
  .principal{
    width:100%
  }
  `]
})
export class GalerieComponent {
  changeImage(e){
    this.urlImgPrincipale = e.target.src ;
  }

  urlImgPrincipale = "https://via.placeholder.com/400x300"
  urlImg1= "https://via.placeholder.com/100x80?text=img1";
  urlImg2= "https://via.placeholder.com/100x80?text=img2"
  urlImg3= "https://via.placeholder.com/100x80?text=img3"
}
