import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';

  primerNumero:number= 0;
  segundoNumero:number= 0;
  resultado:number = 0;

  suma():void{
    this.resultado= this.primerNumero + this.segundoNumero;
  }
  resta():void{
    this.resultado= this.primerNumero - this.segundoNumero;
  }
  multiplicacion():void{
    this.resultado= this.primerNumero * this.segundoNumero;
  }
  division():void{
    if (this.segundoNumero === 0){
      this.resultado = 0;
    }
    this.resultado= (this.primerNumero / this.segundoNumero);
  }
}
