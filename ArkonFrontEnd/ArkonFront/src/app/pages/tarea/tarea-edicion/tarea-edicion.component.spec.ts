import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TareaEdicionComponent } from './tarea-edicion.component';

describe('TareaEdicionComponent', () => {
  //Componente para test del componente
  let component: TareaEdicionComponent;
  let fixture: ComponentFixture<TareaEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule ],
      declarations: [ TareaEdicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Comprueba que el componente se cree de manera correcta
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Comprueba que el formulario sea invalido
  it('Debe retornar formulario invalido', () => {
    const fixture = TestBed.createComponent(TareaEdicionComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const descripcion = app.form.controls['descripcion'];
    descripcion.setValue('Test');
    expect(app.form.invalid).toBeTrue();
  });

});
