import { of } from 'rxjs';
import { TareaService } from './tarea.service';

describe('TareaService', () => {

  //Clase para realizar Test de los servicios

  let service: TareaService;
  let httpClientSpy : { get: jasmine.Spy};

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new TareaService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Metodo para probar servicio de listar tareas.
  it('Retorna lista de objeto Tarea', (done: DoneFn) => {

    const mockResultado = [
        {
            "id_tarea": 1,
            "descripcion": "Prueba 3",
            "fecha_fin": "30/03/2022",
            "duracion": 60,
            "tiempo_tarea": "1 dia 17:33:58",
            "estado": "Pendiente",
            "temporizador": "Normal",
            "fecha_creacion": "28/03/2022",
            "hora_creacion": "21:15:10"
        },
        {
            "id_tarea": 2,
            "descripcion": "Prueba 2",
            "fecha_fin": "30/03/2022",
            "duracion": 120,
            "tiempo_tarea": "02:24:00",
            "estado": "Completada",
            "temporizador": "Normal",
            "fecha_creacion": "28/03/2022",
            "hora_creacion": "09:00:00"
        },
        {
            "id_tarea": 3,
            "descripcion": "Nueva 2",
            "fecha_fin": "30/03/2022",
            "duracion": 150,
            "tiempo_tarea": "2 dias 11:59:42",
            "estado": "Pendiente",
            "temporizador": "Detener",
            "fecha_creacion": "28/03/2022",
            "hora_creacion": "09:00:00"
        },
        {
            "id_tarea": 4,
            "descripcion": "Eliminada",
            "fecha_fin": "30/03/2022",
            "duracion": 150,
            "tiempo_tarea": "02:24:00",
            "estado": "Eliminada",
            "temporizador": "Normal",
            "fecha_creacion": "21/03/2022",
            "hora_creacion": "09:00:00"
        },
        {
            "id_tarea": 5,
            "descripcion": "Nueva",
            "fecha_fin": "30/03/2022",
            "duracion": 230,
            "tiempo_tarea": "02:24:00",
            "estado": "Eliminada",
            "temporizador": "Normal",
            "fecha_creacion": "28/03/2022",
            "hora_creacion": "09:00:00"
        },
        {
            "id_tarea": 6,
            "descripcion": "Prueba 3",
            "fecha_fin": "30/03/2022",
            "duracion": 180,
            "tiempo_tarea": "2 dias 5:49:8",
            "estado": "Pendiente",
            "temporizador": "Normal",
            "fecha_creacion": "28/03/2022",
            "hora_creacion": "09:00:00"
        },
        {
            "id_tarea": 7,
            "descripcion": "prueba 4",
            "fecha_fin": "30/03/2022",
            "duracion": 80,
            "tiempo_tarea": "15 dias 5:49:8",
            "estado": "Pendiente",
            "temporizador": "Normal",
            "fecha_creacion": "15/03/2022",
            "hora_creacion": "09:00:00"
        },
        {
            "id_tarea": 8,
            "descripcion": "prueba 5",
            "fecha_fin": "30/03/2022",
            "duracion": 90,
            "tiempo_tarea": "1 dia 5:49:8",
            "estado": "Pendiente",
            "temporizador": "Normal",
            "fecha_creacion": "29/03/2022",
            "hora_creacion": "09:00:00"
        },
        {
            "id_tarea": 9,
            "descripcion": "prueba 6",
            "fecha_fin": "30/03/2022",
            "duracion": 180,
            "tiempo_tarea": "13:49:10",
            "estado": "Completada",
            "temporizador": "Normal",
            "fecha_creacion": "29/03/2022",
            "hora_creacion": "09:00:00"
        }
    ]
    

    httpClientSpy.get.and.returnValue(of(mockResultado));

    service.listar().subscribe( resultado => {
      expect(resultado).toEqual(mockResultado);
      done();
    });

  });

  // Metodo para probar valores para grafica
  it('Retorna informacion para grafica', (done: DoneFn) => {

    const mockResultado = [
      {
        "name": "Completada",
        "value": 2
      },
      {
          "name": "Eliminada",
          "value": 1
      },
      {
          "name": "Pendiente",
          "value": 4
      }
    ]
    

    httpClientSpy.get.and.returnValue(of(mockResultado));

    service.tareaSemanal().subscribe( (resultado:any) => {
      expect(resultado).toEqual(mockResultado);
      done();
    });

  });
  
});
