
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    //aca se importan los modulos que queremos usar aca
    BrowserModule,
    HeroesModule,//aca viene el modulo de heroes
    ContadorModule//

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
