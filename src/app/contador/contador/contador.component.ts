//transformamos esta clase en un componente de angular con un decorador

import {Component} from '@angular/core';
@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ titulo }}</h1>
            1era forma
            <button (click)="numero = numero + 1;" >+ 1</button>
            <span>{{ numero }}</span>
            <button (click)="numero = numero - 1">- 1</button>
            <br>
            2da. forma
            <button (click)="sumar();" >+ 1</button>
            <span>{{ numero2 }}</span>
            <button (click)="restar();">- 1</button>
            <br>
            3era. forma
            <h3>La base es <strong>{{ base }}</strong></h3>
            <button (click)="acumular(base);" >{{ base }}</button>
            <span>{{ numero3 }}</span>
            <button (click)="acumular(-base);">{{ base }}</button>
            `
})
export class ContadorComponent{
    public titulo: string = 'Contador App';
    public numero: number = 10;
    public numero2: number = 5;
    public numero3: number = 15;
    public base: number = 5;
     sumar (){
       this.numero2 +=1;
     }
   
     restar (){
       this.numero2 -= 1;
     }
   
     //metodo que hace resta y suma
     acumular (valor: number){
       this.numero3 += valor;
     }
}