import { Component, OnInit } from '@angular/core';
//@ts-ignore;
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.title-content')
    const writer = new Typewriter(target, {
      loop: false,
      typeColor: '#EDEDED',
      cursorColor: '#ff764d'

    })
    writer
      .strings(
        400,
        "ACERCA DE MI",
      )
      .start()
    //Description content animacion  
      const descriptionElement = document.querySelector('.description-content')
      const animacion = new Typewriter(descriptionElement, {
        loop: true,
        typeColor: '#ff764d',
        cursorColor:'#EDEDED'
      })
      animacion
        .strings(
          600,
          "Desarrollador FullStack",
          "Estudiante de la UNLAM"
        )
        .start()
      
  }

}
