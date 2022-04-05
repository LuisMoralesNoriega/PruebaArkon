import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar-dialogo',
  templateUrl: './confirmar-dialogo.component.html',
  styleUrls: ['./confirmar-dialogo.component.css']
})

export class ConfirmarDialogoComponent implements OnInit {
  //Componente de dialogo para comfirmar cambios

  //Variables Globales
  tempo: string = "";

  constructor(@Optional() public dialogRef: MatDialogRef<ConfirmarDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public tem: string) { 
      this.tempo = tem;
  }

  //Metodo que se ejecuta al inicio del componente
  ngOnInit(): void {
  }

  //Metodo que devuelve true si acepta la condicion 
  onConfirmar(): void {
    this.dialogRef.close(true);
  }

  //Metodo que devuelve false si cancela la accion
  onCancelar(): void {
    this.dialogRef.close(false);
  }

}
