import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {
  @Input('color') public colorFicha: string="vacio";
  constructor() { }

  ngOnInit(): void {
  }

}
