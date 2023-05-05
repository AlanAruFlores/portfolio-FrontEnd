import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { ServicePersonaService } from 'src/app/service/service-persona.service';
//@ts-ignore;
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  // LISTA DE PERSONAS
  // lista:Persona[]=[];


  personaActual:Persona=new Persona("","","");
  constructor(private service: ServicePersonaService, private router:Router) { }

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
      
      // this.service.getPersonas().subscribe((data)=>{
      //   this.lista=data;
      //   console.log(this.lista);
      // });

      this.service.getPersonaId(1).subscribe((data)=>{
        this.personaActual.id = data.id;
        this.personaActual.nombre = data.nombre;
        this.personaActual.apellido = data.apellido;
        this.personaActual.imagen = data.imagen;
      })

      // this.service.postPersona(new Persona("Pepe","Etesech","imagen4")).subscribe(()=>{
      //   console.log("Se creo con exito");
      // });

      // this.service.deletePersona(5).subscribe((data)=>console.log("Se elimino la persona"));
      // this.service.editarPersona(6,"Pepardo","Etesechs","urlImagen").subscribe(()=>{
      //    window.alert("Se edito la persona");
      // });
  }

}
