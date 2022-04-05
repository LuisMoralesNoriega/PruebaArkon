import { HOST } from './../_shared/var.constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Tarea } from '../_model/Tarea';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  //Clase de servicios que conectan con Back-End
  
  //Variables de contol de cambios
  tareaCambio = new Subject<Tarea[]>();
  mensajeCambio = new Subject<string>();

  //Variable compartida de URL de servicios del Back-End
  url: string = HOST;

  constructor( private http: HttpClient ) { }

  //Metodo GET para listar todas las tareas
  listar(){
    return this.http.get<Tarea[]>(`${HOST}/tareas/listar`);
  }

  //Metodo GET para listar tareas por ID
  listarPorId(idTarea: number) {
    return this.http.get<Tarea>(`${this.url}/tareas/${idTarea}`);
  }

  //Metodo POST para crear una Tarea
  registrar(tarea: Tarea) {
    return this.http.post(`${this.url}/tareas`, tarea);
  }

  //Metodo PUT para actualizar una tarea
  modificar(tarea: Tarea) {
    return this.http.put(`${this.url}/tareas`, tarea);
  }

  //Metoto DELETE para eliminar una Tarea
  eliminar(idTarea: number) {
    return this.http.delete(`${this.url}/tareas/${idTarea}`);
  }

  //Metodo POST para para hacer busqueda de tareas por estado
  bEstado(pestado : string){
    const params = new HttpParams().set('pestado', pestado);
    return this.http.post(`${this.url}/tareas/bestado`, params)
  }

  //Metodo GET para listar las tareas realizadas en la semana
  tareaSemanal() {
    return this.http.get<Tarea>(`${this.url}/tareas/tareaSemanal`);
  }

}
