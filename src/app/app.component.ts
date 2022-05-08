import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  tablero: string[][] = [
    ["vacio", "vacio", "vacio", "vacio", "vacio", "vacio", "vacio"],

    ["vacio", "vacio", "vacio", "vacio", "vacio", "vacio", "vacio"],

    ["vacio", "vacio", "vacio", "vacio", "vacio", "vacio", "vacio"],

    ["vacio", "vacio", "vacio", "vacio", "vacio", "vacio", "vacio"],

    ["vacio", "vacio", "vacio", "vacio", "vacio", "vacio", "vacio"],
    
    ["vacio", "vacio", "vacio", "vacio", "vacio", "vacio", "vacio"],
  ];
  
  juegoIniciado: boolean = false;

  nombreJugador1:string = "Ignacio";
  nombreJugador2:string = "Ismael";

  title = 'Conecta 4';
<<<<<<< HEAD
  filas: number[] = [0, 1, 2, 3, 4, 5];
  columnas: number[] = [0, 1, 2, 3, 4, 5, 6];

  mensaje:string="Luego de escribir los nombres da click a 'Comenzar' para jugar."
  turno:boolean=true;

  filasTotales: number = this.filas.length-1;

  click(col: number): void {
    var filaALlenar: number = this.filasTotales;
    do{
      if (this.tablero[filaALlenar][col] == 'vacio') {
        this.tablero[filaALlenar][col] = this.turno ? 'rojo': 'azul';
        this.turno = !this.turno;
        this.mensaje="Es turno de " + (this.turno ? this.nombreJugador1: this.nombreJugador2);
        var hayGanador: boolean = this.hayGanador(filaALlenar,col);
        filaALlenar=-1;
      }
      filaALlenar--;
    }while(filaALlenar>=0);
  }

  hayGanador(fila:number, columna:number): boolean{
      return true;
  }

  comenzarJuego(){
    this.juegoIniciado=true;
    this.nombreJugador1 = (<HTMLInputElement>document.getElementById("nJugador1")).value;
    this.nombreJugador2 = (<HTMLInputElement>document.getElementById("nJugador2")).value;
    this.mensaje="Es turno de " + (this.turno ? this.nombreJugador1: this.nombreJugador2);
  }

=======
  filas: Array<string> = ["", "", "","","",""];
>>>>>>> 7c7cf0a55fcf32cf2d3ca19990938e49dfc70823
}
