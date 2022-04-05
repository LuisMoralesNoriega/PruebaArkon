import { tareaSemanal } from './../../_model/tareaSemanal';
import { TareaService } from './../../_service/tarea.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarea } from 'src/app/_model/Tarea';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarDialogoComponent } from './confirmar-dialogo/confirmar-dialogo.component';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  //Componente de Tarea es el principal de la aplicacion

  //Variables de control:

  //Lista de nombres para columnas de la tabla de control de tareas
  displayedColumns: string[] = ['descripcion', 'fecha_fin', 'duracion', 'tiempo_tarea', 'estado','temporizador', 'acciones'];
  //Tabla de control
  dataSource = new MatTableDataSource<Tarea>();
  //Paginador de la Tabla
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //Ordenamiento de la Tabla
  @ViewChild(MatSort) sort!: MatSort;
  //Definicion de tamaño de Grafica
  view: [number, number] = [900, 400];
  //Opciones para Grafica
  gradient: boolean = true;
  //Lista de datos para mostrar en Grafica
  single: tareaSemanal[] = [];

  //Constructor de la aplicacion
  constructor(private tareaService: TareaService,
              public dialog: MatDialog) { 
  }

  //Metodo que se ejecuta al inicio del componente
  ngOnInit(): void {
    //Metodo para listar las tareas existentes en la Base de Datos
    this.listar();
    this.tareaService.tareaCambio.subscribe( data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort; 
      this.dataSource.paginator = this.paginator;
    });
  }

  //Metodo para Filtral Datos de la tabla
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //Metodo para listar las tareas
  listar(){
    this.tareaService.listar().subscribe(data =>{    
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort; 
      this.dataSource.paginator = this.paginator;
    });
    this.graficaTareas();
  }

  //Metodo para hacer eliminacion logica de la tarea
  eliminar(tarea: Tarea) {
    tarea.estado = 'Eliminada';
    this.tareaService.modificar(tarea).subscribe(() => {
      this.tareaService.listar().subscribe(data => {
        this.tareaService.tareaCambio.next(data);
        this.tareaService.mensajeCambio.next('SE ELIMINO');
      });
    });
    this.listar();
  }

  //Metodo para marcar la tarea Finalizada
  finalizarTarea(tarea: Tarea) {
    tarea.estado = 'Completada';
    this.tareaService.modificar(tarea).subscribe(() => {
      this.tareaService.listar().subscribe(data => {
        this.tareaService.tareaCambio.next(data);
        this.tareaService.mensajeCambio.next('SE FINALIZO LA TAREA');
      });
    });
    this.listar();
  }

  //Metodo para filtrar las tareas por estado
  filtroEstado(filterValue: string){
    if(filterValue === 'Todas'){
      this.listar();
    }else{
      this.tareaService.bEstado(filterValue).subscribe((data:any) =>{
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort; 
        this.dataSource.paginator = this.paginator;
      });
    }    
  }

  //Metodo para actualizar estado de temporizador
  temporizador(filterValue: string, ta: Tarea ){
    if(filterValue === 'Todas'){
    }else{
      this.confirmDialog(filterValue,ta);
    }    
  }

  //Metodo para confirmar si se quiere actualizar el temporizador
  confirmDialog(tm : string, ta: Tarea ): void {
    const dialogRef = this.dialog.open(ConfirmarDialogoComponent, {
      maxWidth: "600px",
      data: tm
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult){
        if(tm === 'Reiniciar'){
          let date = new Date();
          ta.fecha_creacion = date.toLocaleDateString('es-es', { year: 'numeric', month: '2-digit', day: '2-digit' });
          ta.hora_creacion = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
          ta.tiempo_tarea = '00:00:00';      
        }else{
          ta.temporizador = tm;
        }
        this.tareaService.modificar(ta).subscribe(() => {
          this.tareaService.listar().subscribe(data => {
            this.tareaService.tareaCambio.next(data);
            this.tareaService.mensajeCambio.next('SE MODIFICÓ');
          });
        });
      }else{
        this.listar();
      }
    });
  }

  //Metodo para Graficar las tareas
  graficaTareas(){
    this.tareaService.tareaSemanal().subscribe((data:any) =>{  
      this.single = data;
    });
  }

}