import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  // Recibimos el mensaje a mostrar y cual será el color del texto
  @Input('colorTexto') public colorDelTexto:string = "";
  @Input('mensaje') public mensajeRecibido:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
