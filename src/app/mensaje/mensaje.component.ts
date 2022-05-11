import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  @Input('colorTexto') public colorDelTexto:string = "";
  @Input('mensaje') public mensajeRecivido:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
