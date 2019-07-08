import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


// Angular Material Modules
import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { JuegoComponent } from './juego/juego.component';
import { EquipoComponent } from './equipo/equipo.component';
import { JugadorComponent } from './jugador/jugador.component';
import { LoginComponent } from './login/login.component';
import { FiltroPorLetraPipe } from './_pipes/filtro-por-letra.pipe';

import { JugadoresService } from './_services/jugadores.service';
import { EquiposService } from './_services/equipos.service';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    EquipoComponent,
    JugadorComponent,
    LoginComponent,
    FiltroPorLetraPipe,
    JugadoresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    AppRoutingModule
  ],
  providers: [JugadoresService, EquiposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
