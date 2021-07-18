import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Hulk', 'Thor', 'Ironman'];
  heroeBorrado: string = '';

  /*constructor() {

    console.log('constructor');
   }*/

  /*ngOnInit(): void {//ciclo de vido, pasos o metodos que dispara angular de manera automatica
    console.log('ngOnInit');
  }*/

  borrarHeroe(){
    const heroeBorrado = this.heroes.shift();
    this.heroeBorrado = heroeBorrado || ''; //shift puede retornar undefined, entonces si regresa indefinido que sea un string vacio
    console.log(heroeBorrado);
    
  }

}
