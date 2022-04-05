import { TareaEdicionComponent } from './pages/tarea/tarea-edicion/tarea-edicion.component';
import { TareaComponent } from './pages/tarea/tarea.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Ruta principal control de Tareas
  { path:'tarea', component: TareaComponent, children: [
    //Ruta para agregar una nueva tarea
    { path:'nuevo', component: TareaEdicionComponent },
    //Ruta para hacer la edicion de una tarea existente
    { path:'edicion/:id', component: TareaEdicionComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//Modulo de Routin para navegar entre los componentes de la aplicacion por medio de rutas
export class AppRoutingModule { }
