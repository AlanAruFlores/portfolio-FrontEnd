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
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider, InterceptorService } from './service/interceptor.service';
import { ExperienciaNuevaComponent } from './components/experiencia/experiencia-nueva/experiencia-nueva.component';
import { ModificarExperienciaComponent } from './components/experiencia/modificar-experiencia/modificar-experiencia.component';
import { CardExperienciaComponent } from './components/experiencia/card-experiencia/card-experiencia.component';
import { CardEducacionComponent } from './components/educacion/card-educacion/card-educacion.component';
import { EducacionNuevaComponent } from './components/educacion/educacion-nueva/educacion-nueva.component';
import { ModificarEducacionComponent } from './components/educacion/modificar-educacion/modificar-educacion.component';
import { HardCardComponent } from './components/hard-soft-skill/hard-card/hard-card.component';
import { CrearHardComponent } from './components/hard-soft-skill/crear-hard/crear-hard.component';
import { ModificarHardComponent } from './components/hard-soft-skill/modificar-hard/modificar-hard.component';
import { SoftCardComponent } from './components/hard-soft-skill/soft-card/soft-card.component';
import { CrearSoftComponent } from './components/hard-soft-skill/crear-soft/crear-soft.component';
import { ModificarSoftComponent } from './components/hard-soft-skill/modificar-soft/modificar-soft.component';

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
    HomeComponent,
    LoginComponent,
    MenuComponent,
    ExperienciaNuevaComponent,
    ModificarExperienciaComponent,
    CardExperienciaComponent,
    CardEducacionComponent,
    EducacionNuevaComponent,
    ModificarEducacionComponent,
    HardCardComponent,
    CrearHardComponent,
    ModificarHardComponent,
    SoftCardComponent,
    CrearSoftComponent,
    ModificarSoftComponent 
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // PODEMOS AGREGARLE PARAMETROS POR DEFECTO, PERO LE VAMOS A REALIZAR MODIFICACIONES POR LO TANTO LA VAMOS A DEJAR VACIA
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
  
  ],
  providers: [ServicePersonaService,interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
