import {NgModule} from '@angular/core';
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[//cosas publicas o exportaciones
        ContadorComponent,
    ],
    imports: [//usualmente los modulos se meten en los imports
        //CommonModule,//Este modulo tiene funcionalidades como ngFor y ngIf, aca lo comente porque no necesita ninguna directiva de ngFor, ngIf, otro 

    ]
})
export class ContadorModule{

}