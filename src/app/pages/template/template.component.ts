import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Console } from 'console';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {


  usuario = {
    nombre: 'Luis Alejandro',
    apellido:'Olivares',
    correo:'alex2761086444@gmail.com'
  }


  constructor() { }

  ngOnInit(): void {
  }

  guardar( forma: NgForm ){
    console.log( forma );
   if ( forma.invalid ) {
     Object.values( forma.controls ).forEach( control =>{
       control.markAsTouched();
     } );

     return;
   }
   console.log( forma.value );
  }

}
