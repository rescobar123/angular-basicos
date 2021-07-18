import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/hereo.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[//cosas publicas o exportaciones
        ListadoComponent,
    ],
    imports: [//usualmente los modulos se meten en los imports
        CommonModule,//Este modulo tiene funcionalidades como ngFor y ngIf, 

    ]
})
export class HeroesModule{

}