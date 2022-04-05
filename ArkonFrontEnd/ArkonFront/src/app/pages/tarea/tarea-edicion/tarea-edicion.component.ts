import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tarea } from 'src/app/_model/Tarea';
import { TareaService } from 'src/app/_service/tarea.service';

@Component({
  selector: 'app-tarea-edicion',
  templateUrl: './tarea-edicion.component.html',
  styleUrls: ['./tarea-edicion.component.css']
})
export class TareaEdicionComponent implements OnInit {
  //Componente para crear o editar una tarea

  //Variables Globales
  tarea!: Tarea;
  form: FormGroup = new FormGroup({});
  edicion!: boolean;
  id!: number;
  estadoTarea = '';

  constructor( private tareaService: TareaService, 
               private route: ActivatedRoute, 
               private router: Router ) { 
  }
 
  //Metodo de inicio del componente
  ngOnInit(): void {

    this.tarea = new Tarea();

    this.form = new FormGroup({
      'id_tarea': new FormControl(''),
      'descripcion': new FormControl('', Validators.required ),
      'fecha_fin': new FormControl('', Validators.required),
      'duracion': new FormControl('', Validators.required),
      'tiempo_tarea': new FormControl(''),
      'estado': new FormControl('', Validators.required)
    });

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.edicion = this.id != null;
      this.initForm();
    });

  }

  // Metodo para iniciar el formulario de tarea 
  initForm() {
    if (this.edicion) {
      //cargar la data del servicio hacia el form
      this.tareaService.listarPorId(this.id).subscribe(data => {
        this.form = new FormGroup({
          'id_tarea': new FormControl(data.id_tarea),
          'descripcion': new FormControl(data.descripcion),
          'fecha_fin': new FormControl(data.fecha_fin),
          'duracion': new FormControl(data.duracion),
          'tiempo_tarea': new FormControl(data.tiempo_tarea),
          'estado': new FormControl(data.estado)
        });
      });
    }
  }

  //Opera los datos segun sea una creacion o edicion
  operar() {
    this.tarea.id_tarea = this.form.value['id_tarea'];
    this.tarea.descripcion = this.form.value['descripcion'];
    this.tarea.fecha_fin = this.form.value['fecha_fin'];
    this.tarea.duracion = this.form.value['duracion'];
    this.tarea.estado = this.form.value['estado'];
    

    if (this.edicion) {
      this.tareaService.modificar(this.tarea).subscribe(() => {
        this.tareaService.listar().subscribe(data => {
          this.tareaService.tareaCambio.next(data);
          this.tareaService.mensajeCambio.next('SE MODIFICÓ');
        });
      });
    } else {
      let date = new Date();
      this.tarea.fecha_creacion = date.toLocaleDateString('es-es', { year: 'numeric', month: '2-digit', day: '2-digit' });
      this.tarea.hora_creacion = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      this.tarea.tiempo_tarea = '00:00:00';
      console.log(this.tarea);
      this.tareaService.registrar(this.tarea).subscribe(() => { 
        this.tareaService.listar().subscribe(data => {
          this.tareaService.tareaCambio.next(data);
          this.tareaService.mensajeCambio.next('SE REGISTRÓ');
        });
      });
    }
    this.router.navigate(['tarea']);
  }

}