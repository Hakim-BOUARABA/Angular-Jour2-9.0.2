import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { DataService } from "./data.service";
import { ImageComponent } from './image/image.component';
import { CliqueComponent } from './clique/clique.component';
import { FicheComponent } from './fiche/fiche.component'

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    ImageComponent,
    CliqueComponent,
    FicheComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
