import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {
  
  // Recibimos de qué color es la ficha que se quiere 
  @Input('color') public colorFicha: string="";

  constructor() { }

  ngOnInit(): void {
  }

}
