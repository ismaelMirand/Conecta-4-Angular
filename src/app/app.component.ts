import { Component, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // DEFINICION DE ELEMENTOS QUE UTILIZAREMOS
  //Este es el tablero que utilizamos para el juego
  tablero: string[][] = [
    ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],

    ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],

    ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],

    ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],

    ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],

    ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],
  ];
  //Almacenaremos el color del ganador en caso de que alguno gane
  colorGanador: string = 'sinColor';
  //Almacenar los nombres de los jugadores para posteriormente mostrar los mensajes
  nombreJugador1: string = 'Ignacio';
  nombreJugador2: string = 'Ismael';

  //Para el titulo
  title = 'Conecta 4';

  //Mensaje que mantendrá a los usuario informados
  mensaje: string =
    "Luego de escribir los nombres da click a 'Comenzar' para jugar.";
  //Variable que nos indicará de quién es el turno.
  turno: boolean = true;

  //para crear el tablero y otras variables
  filas: number[] = [0, 1, 2, 3, 4, 5];
  columnas: number[] = [0, 1, 2, 3, 4, 5, 6];
  filasTotales: number = this.filas.length - 1;
  juegoIniciado: boolean = false;
  juegoTerminado: boolean = false;

  //Funcion que permite a los jugadores jugar su ficha!
  jugarFicha(col: number): void {
    //Solo se puede jugar una ficha si el juego está iniciado
    if (this.juegoIniciado) {
      var filaALlenar: number = this.filasTotales;
      do {
        //pondremos la ficha en la fila más "baja" de la columna seleccionada
        if (this.tablero[filaALlenar][col] == 'vacio') {
          this.tablero[filaALlenar][col] = this.turno ? 'rojo' : 'azul';
          this.turno = !this.turno;
          var hayGanador: boolean = this.hayGanador();
          //mensaje indicando que le toca al otro jugador
          this.mensaje =
            'Jugador ' +
            (this.turno ? this.nombreJugador1 : this.nombreJugador2) +
            ' es tu turno.';
          var hayGanador: boolean = this.hayGanador();
          filaALlenar = -1;
        }
        //"subimos" una fila, hasta encontrar una vacia dentro del rango del tablero
        filaALlenar--;
        //Mientras la fila a llenar estemos en el rango
      } while (filaALlenar >= 0);
    }
  }

  //Función que verifica si hay ganador en el tablero
  hayGanador(): boolean {
    //Verifica si hay ganador horizontalmente
    for (let fila = 0; fila <= this.filasTotales; fila++) {
      //revisamos todas las filas, pero solo hasta la columna 3 ya que desde la 4 en adelante no puede haber un ganador horizontalmente hacia la derecha
      for (let columna = 0; columna < this.columnas.length - 3; columna++) {
        // console.log('fila: ' + fila);
        // console.log('columna: ' + columna);

        //Solo revisa la posición si no está vacía, si está vacía, esa posición no puede ser parte de una conexión de 4 fichas
        if (this.tablero[fila][columna] != 'vacio') {
          // console.log("this.tablero[fila][columna]: "+ this.tablero[fila][columna]);
          //Revisa si hay una conexión de 4 fichas hacia la derecha de cualquier color
          if (
            this.tablero[fila][columna] == this.tablero[fila][columna + 1] &&
            this.tablero[fila][columna + 1] ==
              this.tablero[fila][columna + 2] &&
            this.tablero[fila][columna + 2] == this.tablero[fila][columna + 3]
          ) {
            // console.log(this.tablero[fila][columna] + "==" +  this.tablero[fila][columna+1] + "==" +  this.tablero[fila][columna+2] +"=="+ this.tablero[fila][columna+3]);
            //Si entra acá es porque hay ganador
            //y pintará las fichas del color ganador
            this.colorGanador = this.turno ? 'azulg' : 'rojog';
            this.tablero[fila][columna] = this.colorGanador;
            this.tablero[fila][columna + 1] = this.colorGanador;
            this.tablero[fila][columna + 2] = this.colorGanador;
            this.tablero[fila][columna + 3] = this.colorGanador;
            this.mensaje =
              (this.turno ? this.nombreJugador2 : this.nombreJugador1) +
              ' ganaste esta partida!';
            this.juegoIniciado = false;
            this.juegoTerminado = true;
          }
        }
      }
    }

    //Verifica si hay ganador verticalmente
    for (let columna = 0; columna < this.columnas.length; columna++) {
      //revisamos todas las columnas, pero solo hasta la fila 2 ya que desde la 3 en adelante no puede haber un ganador verticalmente hacia abajo
      for (let fila = 0; fila <= this.filasTotales - 3; fila++) {
        //console.log('fila: ' + fila);
        //console.log('columna: ' + columna);

        //Solo revisa la posición si no está vacía, si está vacía, esa posición no puede ser parte de una conexión de 4 fichas
        if (this.tablero[fila][columna] != 'vacio') {
          // console.log("this.tablero[fila][columna]: "+ this.tablero[fila][columna]);
          //Revisa si hay una conexión de 4 fichas hacia abajo de cualquier color
          if (
            this.tablero[fila][columna] == this.tablero[fila + 1][columna] &&
            this.tablero[fila + 1][columna] ==
              this.tablero[fila + 2][columna] &&
            this.tablero[fila + 2][columna] == this.tablero[fila + 3][columna]
          ) {
            // console.log(this.tablero[fila][columna] + "==" +  this.tablero[fila][columna+1] + "==" +  this.tablero[fila][columna+2] +"=="+ this.tablero[fila][columna+3]);
            //Si entra acá es porque hay ganador
            //y pintará las fichas del color ganador
            this.colorGanador = this.turno ? 'azulg' : 'rojog';
            this.tablero[fila][columna] = this.colorGanador;
            this.tablero[fila + 1][columna] = this.colorGanador;
            this.tablero[fila + 2][columna] = this.colorGanador;
            this.tablero[fila + 3][columna] = this.colorGanador;
            this.mensaje =
              (this.turno ? this.nombreJugador2 : this.nombreJugador1) +
              ' ganaste esta partida!';
            this.juegoIniciado = false;
            this.juegoTerminado = true;
          }
        }
      }
    }

    //VERIFICA SI HAY GANADOR DIAGONALMENTE
    //Revisa ciertas posiciones y no toda la tabla, ya que existen piezas claves donde se pueden generar condiciones ganadoras en forma diagonal

    //Verifica si hay ganador diagonalmente
    for (let columna = 0; columna < this.columnas.length - 3; columna++) {
      for (let fila = 0; fila <= this.filasTotales - 3; fila++) {
        // console.log('fila: ' + fila);
        // console.log('columna: ' + columna);

        //Solo revisa la posición si no está vacía, si está vacía, esa posición no puede ser parte de una conexión de 4 fichas
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
            //y pintará las fichas del color ganador
            this.colorGanador = this.turno ? 'azulg' : 'rojog';
            this.tablero[fila][columna] = this.colorGanador;
            this.tablero[fila + 1][columna + 1] = this.colorGanador;
            this.tablero[fila + 2][columna + 2] = this.colorGanador;
            this.tablero[fila + 3][columna + 3] = this.colorGanador;
            this.mensaje =
              (this.turno ? this.nombreJugador2 : this.nombreJugador1) +
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

        //Solo revisa la posición si no está vacía, si está vacía, esa posición no puede ser parte de una conexión de 4 fichas
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
            //y pintará las fichas del color ganador
            this.colorGanador = this.turno ? 'azulg' : 'rojog';
            this.tablero[fila][columna] = this.colorGanador;
            this.tablero[fila + 1][columna - 1] = this.colorGanador;
            this.tablero[fila + 2][columna - 2] = this.colorGanador;
            this.tablero[fila + 3][columna - 3] = this.colorGanador;
            this.mensaje =
              (this.turno ? this.nombreJugador2 : this.nombreJugador1) +
              ' ganaste esta partida!';
            this.juegoIniciado = false;
            this.juegoTerminado = true;
          }
        }
      }
    }
    return false;
  }

  //Función que comienza el juego
  comenzarJuego() {
    //Comenzaremos el juego solamente si la persona a escrito los dos nombres de los jugadores
    //Además incluimos otra verificaciones, para que el juego funcione mejor aún como que los nombres deben ser distintos 
    //y que debe comenzar un nuevo juego al terminar el anterior.
    if (
      (<HTMLInputElement>document.getElementById('nJugador1')).value != '' &&
      (<HTMLInputElement>document.getElementById('nJugador2')).value != '' &&
      this.juegoTerminado == false &&
      (<HTMLInputElement>document.getElementById('nJugador1')).value !=
        (<HTMLInputElement>document.getElementById('nJugador2')).value
    ) {
      //Si se cumplemn las condiciones, damos el juego como iniciado
      this.juegoIniciado = true;
      //Se elige el turno inicial de manera random
      this.turno = Math.round(Math.random() * 1) == 1 ? true : false;
      //Almacenamos los nombres de los jugadores
      this.nombreJugador1 = (<HTMLInputElement>(
        document.getElementById('nJugador1')
      )).value;
      this.nombreJugador2 = (<HTMLInputElement>(
        document.getElementById('nJugador2')
      )).value;
      //Informamos a los jugadores quién debe comenzar a jugar.
      this.mensaje =
        'Jugador ' +
        (this.turno ? this.nombreJugador1 : this.nombreJugador2) +
        ' es tu turno.';
    } else if (
      //Si no se cumplen las condiciones y los nombres son iguales, le indicamos a lo jugadores que deben escribir nombres diferentes.
      (<HTMLInputElement>document.getElementById('nJugador1')).value != '' &&
      (<HTMLInputElement>document.getElementById('nJugador2')).value != '' &&
      (<HTMLInputElement>document.getElementById('nJugador1')).value ==
        (<HTMLInputElement>document.getElementById('nJugador2')).value
    ) {
      this.mensaje = 'Los nombres no pueden ser el mismo!';
    } else {
      //Sino, es porque los jugadores no han ingresado los dos nombres para comenzar a jugar
      this.mensaje = 'Ingrese los nombres antes de comenzar!';
    }

    //Si el juego anterior ha finalizado, deben dar a Nuevo juego para jugar otra vez.
    if (this.juegoTerminado == true) {
      this.mensaje = 'Inicie un nuevo juego por favor!';
    }
  }

  //Funcion que crea un nuevo juego
  nuevoJuego(): void {
    //Reiniciamos el tablero
    this.tablero = [
      ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],

      ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],

      ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],

      ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],

      ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],

      ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'],
    ];
    //Reiniciamos el color del ganador y el estado del juego
    this.colorGanador = 'sinColor';
    this.juegoTerminado = false;
    this.juegoIniciado = false;
    //Reiniciamos los nombres de los jugadores
    (<HTMLInputElement>document.getElementById('nJugador1')).value = '';
    (<HTMLInputElement>document.getElementById('nJugador2')).value = '';
    //E indicamos a los jugadores las instrucciones para jugar
    this.mensaje =
      "Luego de escribir los nombres da click a 'Comenzar' para jugar.";
    
  }
}
