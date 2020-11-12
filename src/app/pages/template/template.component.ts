import { Component, OnInit } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log('Submit disparado');
  
  }

}
