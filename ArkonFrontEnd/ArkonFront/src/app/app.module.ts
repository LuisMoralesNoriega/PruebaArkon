import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TareaComponent } from './pages/tarea/tarea.component';
import { TareaEdicionComponent } from './pages/tarea/tarea-edicion/tarea-edicion.component';
import { ConfirmarDialogoComponent } from './pages/tarea/confirmar-dialogo/confirmar-dialogo.component';

@NgModule({
  declarations: [
    AppComponent,
    TareaComponent,
    TareaEdicionComponent,
    ConfirmarDialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// MOdulo principal de Front-End
export class AppModule { }
