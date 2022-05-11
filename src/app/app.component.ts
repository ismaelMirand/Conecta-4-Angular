import { Component, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tablero: string[][] = [
    ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],

    ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],

    ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],

    ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],

    ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],

    ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],
  ];

  juegoIniciado: boolean = false;
  juegoTerminado: boolean= false;
  colorGanador: string = "sinColor";
  nombreJugador1: string = 'Ignacio';
  nombreJugador2: string = 'Ismael';

  title = 'Conecta 4';
  filas: number[] = [0, 1, 2, 3, 4, 5];
  columnas: number[] = [0, 1, 2, 3, 4, 5, 6];

  mensaje: string =
    "Luego de escribir los nombres da click a 'Comenzar' para jugar.";
  turno: boolean = true;

  filasTotales: number = this.filas.length - 1;

  jugarFicha(col: number): void {
    if (this.juegoIniciado) {
      var filaALlenar: number = this.filasTotales;
      do {
        if (this.tablero[filaALlenar][col] == 'vacio') {
          this.tablero[filaALlenar][col] = this.turno ? 'rojo' : 'azul';
          this.turno = !this.turno;
          this.mensaje =
            'Jugador ' +
            (this.turno ? this.nombreJugador1 : this.nombreJugador2) +
            ' es tu turno.';
          var hayGanador: boolean = this.hayGanador();
          filaALlenar = -1;
        }
        filaALlenar--;
      } while (filaALlenar >= 0);
    }
  }

  hayGanador(): boolean {
    //Verifica si hay ganador horizontalmente
    for (let fila = 0; fila <= this.filasTotales; fila++) {
      for (let columna = 0; columna < this.columnas.length - 3; columna++) {
        // console.log('fila: ' + fila);
        // console.log('columna: ' + columna);

        if (this.tablero[fila][columna] != 'vacio') {
          // console.log("this.tablero[fila][columna]: "+ this.tablero[fila][columna]);
          if (
            this.tablero[fila][columna] == this.tablero[fila][columna + 1] &&
            this.tablero[fila][columna + 1] ==
              this.tablero[fila][columna + 2] &&
            this.tablero[fila][columna + 2] == this.tablero[fila][columna + 3]
          ) {
            // console.log(this.tablero[fila][columna] + "==" +  this.tablero[fila][columna+1] + "==" +  this.tablero[fila][columna+2] +"=="+ this.tablero[fila][columna+3]);
            //Si entra acá es porque hay ganador
            this.colorGanador = this.turno ? 'azulg' : 'rojog';
            this.tablero[fila][columna] = this.colorGanador;
            this.tablero[fila][columna + 1] = this.colorGanador;
            this.tablero[fila][columna + 2] = this.colorGanador;
            this.tablero[fila][columna + 3] = this.colorGanador;
            this.mensaje =(this.turno ? this.nombreJugador2 : this.nombreJugador1)+
              ' ganaste esta partida!';
            this.juegoIniciado = false;
            this.juegoTerminado = true; 
          }
        }
      }
    }

    //Verifica si hay ganador verticalmente
    for (let columna = 0; columna < this.columnas.length; columna++) {
      for (let fila = 0; fila <= this.filasTotales - 3; fila++) {
        //console.log('fila: ' + fila);
        //console.log('columna: ' + columna);

        if (this.tablero[fila][columna] != 'vacio') {
          // console.log("this.tablero[fila][columna]: "+ this.tablero[fila][columna]);
          if (
            this.tablero[fila][columna] == this.tablero[fila + 1][columna] &&
            this.tablero[fila + 1][columna] ==
              this.tablero[fila + 2][columna] &&
            this.tablero[fila + 2][columna] == this.tablero[fila + 3][columna]
          ) {
            // console.log(this.tablero[fila][columna] + "==" +  this.tablero[fila][columna+1] + "==" +  this.tablero[fila][columna+2] +"=="+ this.tablero[fila][columna+3]);
            //Si entra acá es porque hay ganador
            this.colorGanador = this.turno ? 'azulg' : 'rojog';
            this.tablero[fila][columna] = this.colorGanador;
            this.tablero[fila + 1][columna] = this.colorGanador;
            this.tablero[fila + 2][columna] = this.colorGanador;
            this.tablero[fila + 3][columna] = this.colorGanador;
            this.mensaje =(this.turno ? this.nombreJugador2 : this.nombreJugador1)+
              ' ganaste esta partida!';
            this.juegoIniciado = false;
            this.juegoTerminado = true; 
          }
        }
      }
    }
    //Verifica si hay ganador diagonalmente
    for (let columna = 0; columna < this.columnas.length-3; columna++) {
      for (let fila = 0; fila <= this.filasTotales - 3; fila++) {
        // console.log('fila: ' + fila);
        // console.log('columna: ' + columna);

        if (this.tablero[fila][columna] != 'vacio') {
          // console.log("this.tablero[fila][columna]: "+ this.tablero[fila][columna]);
          if (
            this.tablero[fila][columna] ==
              this.tablero[fila + 1][columna + 1] &&
            this.tablero[fila + 1][columna + 1] ==
              this.tablero[fila + 2][columna + 2] &&
            this.tablero[fila + 2][columna + 2] ==
              this.tablero[fila + 3][columna + 3]
          ) {
            // console.log(this.tablero[fila][columna] + "==" +  this.tablero[fila+1][columna+1] + "==" +  this.tablero[fila+2][columna+2] +"=="+ this.tablero[fila+3][columna+3]);
            //Si entra acá es porque hay ganador
            this.colorGanador = this.turno ? 'azulg' : 'rojog';
            this.tablero[fila][columna] = this.colorGanador;
            this.tablero[fila + 1][columna + 1] = this.colorGanador;
            this.tablero[fila + 2][columna + 2] = this.colorGanador;
            this.tablero[fila + 3][columna + 3] = this.colorGanador;
            this.mensaje =(this.turno ? this.nombreJugador2 : this.nombreJugador1)+
              ' ganaste esta partida!';
            this.juegoIniciado = false;
            this.juegoTerminado = true; 
          }
        }
      }
    }

    //Verifica si hay ganador diagonalmente en la otra dirección
    for (let columna = 3; columna < this.columnas.length; columna++) {
      for (let fila = 0; fila <= this.filasTotales - 3; fila++) {
        // console.log('fila: ' + fila);
        // console.log('columna: ' + columna);

        if (this.tablero[fila][columna] != 'vacio') {
          // console.log("this.tablero[fila][columna]: "+ this.tablero[fila][columna]);
          if (
            this.tablero[fila][columna] ==
              this.tablero[fila + 1][columna - 1] &&
            this.tablero[fila + 1][columna - 1] ==
              this.tablero[fila + 2][columna - 2] &&
            this.tablero[fila + 2][columna - 2] ==
              this.tablero[fila + 3][columna - 3]
          ) {
            // console.log(this.tablero[fila][columna] + "==" +  this.tablero[fila+1][columna+1] + "==" +  this.tablero[fila+2][columna+2] +"=="+ this.tablero[fila+3][columna+3]);
            //Si entra acá es porque hay ganador
            this.colorGanador = this.turno ? 'azulg' : 'rojog';
            this.tablero[fila][columna] = this.colorGanador;
            this.tablero[fila + 1][columna - 1] = this.colorGanador;
            this.tablero[fila + 2][columna - 2] = this.colorGanador;
            this.tablero[fila + 3][columna - 3] = this.colorGanador;
            this.mensaje =(this.turno ? this.nombreJugador2 : this.nombreJugador1)+
              ' ganaste esta partida!';
            this.juegoIniciado = false;
            this.juegoTerminado = true; 
          }
        }
      }
    }
    return false;
  }

  comenzarJuego() {
    
    if (
      (<HTMLInputElement>document.getElementById('nJugador1')).value != '' &&
      (<HTMLInputElement>document.getElementById('nJugador2')).value != '' &&
        this.juegoTerminado==false
    ) {
      this.juegoIniciado = true;
      this.turno = Math.round(Math.random() * 1) == 1 ? true : false;
      this.nombreJugador1 = (<HTMLInputElement>(
        document.getElementById('nJugador1')
      )).value;
      this.nombreJugador2 = (<HTMLInputElement>(
        document.getElementById('nJugador2')
      )).value;
      this.mensaje =
        'Jugador ' +
        (this.turno ? this.nombreJugador1 : this.nombreJugador2) +
        ' es tu turno.';
      } else {
      this.mensaje = 'Ingrese los nombres antes de comenzar!';
    }

      if(this.juegoTerminado==true){
        this.mensaje = 'Inicie un nuevo juego por favor!'
      }
     
  }

  nuevoJuego(): void {
    this.tablero = [
      ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],

      ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],

      ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],

      ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],

      ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],

      ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],
    ];
  
    this.colorGanador="sinColor";
    this.juegoIniciado = false;
    (<HTMLInputElement>document.getElementById('nJugador1')).value = '';
    (<HTMLInputElement>document.getElementById('nJugador2')).value = '';
    this.mensaje =
      "Luego de escribir los nombres da click a 'Comenzar' para jugar.";
    this.juegoTerminado=false;
  }
}
/*
          if (
            this.tablero[fila][columna] == this.tablero[fila-1][columna+1] &&
            this.tablero[fila-1][columna+1] == this.tablero[fila-2][columna+2] &&
            this.tablero[fila-2][columna+2] == this.tablero[fila-3][columna+3]
          ) {
           // console.log(this.tablero[fila][columna] + "==" +  this.tablero[fila+1][columna+1] + "==" +  this.tablero[fila+2][columna+2] +"=="+ this.tablero[fila+3][columna+3]);
            //Si entra acá es porque hay ganador
            var colorGanador = this.turno ? 'azulg' : 'rojog';
            this.tablero[fila][columna] = colorGanador;
            this.tablero[fila-1][columna+1] = colorGanador;
            this.tablero[fila-2][columna+2] = colorGanador;
            this.tablero[fila-3][columna+3] = colorGanador;
            this.mensaje =
              'El ganador es ' +
              (this.turno ? this.nombreJugador2 : this.nombreJugador1);
            this.juegoIniciado = false;
          } */
