import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardSoftSkillComponent } from './components/hard-soft-skill/hard-soft-skill.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

import { HttpClientModule } from '@angular/common/http';
import { ServicePersonaService } from './service/service-persona.service';
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    RedesSocialesComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardSoftSkillComponent,
    ProyectosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PODEMOS AGREGARLE PARAMETROS POR DEFECTO, PERO LE VAMOS A REALIZAR MODIFICACIONES POR LO TANTO LA VAMOS A DEJAR VACIA
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [ServicePersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
