import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TareaService } from 'src/app/_service/tarea.service';

import { ConfirmarDialogoComponent } from './confirmar-dialogo.component';

describe('ConfirmarDialogoComponent', () => {
  let service: TareaService;
  let httpClientSpy : { post: jasmine.Spy};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarDialogoComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new TareaService(httpClientSpy as any);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
