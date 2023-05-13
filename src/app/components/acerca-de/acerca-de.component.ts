import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { windowWhen } from 'rxjs';
import { Persona } from 'src/app/models/Persona';
import { ServicePersonaService } from 'src/app/service/service-persona.service';
//@ts-ignore;
import Typewriter from 't-writer.js';

import {FormGroup, FormBuilder,Validators} from '@angular/forms';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  personaActual:Persona=new Persona("","","");


  //FORMS MODIFICAR
  nombreActualizar!:string;
  descripcionActualizar!:string;
  modificarDescripcion:boolean=false;
  modificarNombre:boolean =false;
  estaLogeado:boolean = false;

  //FORM VALIDATORS
  forms:FormGroup;
  formsDos:FormGroup;

  errorNombre:boolean = false;
  errorDescripcion:boolean = false;
  
  constructor(private service: ServicePersonaService, private router:Router, fb : FormBuilder, fb2 : FormBuilder, private serviceToken:TokenService) {
    this.forms = fb.group({
      nombre:['',Validators.required]
    });

    this.formsDos=fb2.group({
      descripcion:['',Validators.required]
    });

    if(this.serviceToken.getToken()){
      this.estaLogeado=true;
    }else{
      this.estaLogeado = false;
    }

   }

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
      
      this.service.getPersonaId(1).subscribe((data)=>{
        this.personaActual.id = data.id;
        this.personaActual.nombre = data.nombre;
        this.personaActual.descripcion = data.descripcion;
        this.personaActual.imagen = data.imagen;
        this.nombreActualizar = data.nombre;
        this.descripcionActualizar = data.descripcion;
      })

  }

  public editarNombre(){
    this.modificarNombre = true;
  }
  public editarDescripcion(){
    this.modificarDescripcion = true;
  }

  public noEditarNombre(){
    this.modificarNombre = false;
  }
  public noEditarDescripcion(){
    this.modificarDescripcion = false;
  }

  //EDITAR 
  public actualizarNombre(){

    if(this.forms.status=="INVALID"){
      this.errorNombre = true;
    }else{
      this.errorNombre = false;
      this.service.editarPersona(this.personaActual.id!,this.nombreActualizar, this.personaActual.descripcion).subscribe((data)=>{
        console.log(data);
      });
      alert("Se actualizo con exito");
      window.location.reload();
    }
  
  }
  public actualizarDescripcion(){
    if(this.formsDos.status=="INVALID"){
      this.errorDescripcion = true;
    }else{
      this.errorDescripcion = false;
      this.service.editarPersona(this.personaActual.id!,this.personaActual.nombre, this.descripcionActualizar).subscribe((data)=>{
        console.log(data);
      });
      alert("Se actualizo con exito");
      window.location.reload();
    }
  }
}
