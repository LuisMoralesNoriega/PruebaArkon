import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Componente principal del Front-End

  title = 'ArkonFront';

  constructor( private router: Router
    ) {

  }

  ngOnInit(): void {    
    this.router.navigate(['tarea']);
  }
}
