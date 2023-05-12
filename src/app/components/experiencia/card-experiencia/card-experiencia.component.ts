import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';

@Component({
  selector: 'app-card-experiencia',
  templateUrl: './card-experiencia.component.html',
  styleUrls: ['./card-experiencia.component.css']
})
export class CardExperienciaComponent implements OnInit {

  modificar:boolean = false;

  @Input() exp !:Experiencia;
  constructor() { }

  ngOnInit(): void {
  }

  public habilitarModificar(){
    this.modificar = true;
  }
  public desahibilitarModificar(){
    this.modificar = false;
  }
}
