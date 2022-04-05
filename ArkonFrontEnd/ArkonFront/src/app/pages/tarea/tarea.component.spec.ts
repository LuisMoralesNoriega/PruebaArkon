import { TareaService } from './../../_service/tarea.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TareaComponent } from './tarea.component';

describe('TareaComponent', () => {
  
  //Componente de pruebas correspondiente al modulo de Tarea
  let service: TareaService;
  let httpClientSpy : { post: jasmine.Spy};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new TareaService(httpClientSpy as any);
  });

  //Prueba de creacion de componente
  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
