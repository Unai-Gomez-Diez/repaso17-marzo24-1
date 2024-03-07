import {Component, OnInit} from '@angular/core';
import {Trabajador} from "./trabajador";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  trabajador1: Trabajador = new Trabajador
  horasTotales: number = 0
  trabajadores: Trabajador[] = []

  constructor(private formulario: FormBuilder) {
  }
  formTrabajador = this.formulario.group({
    nombre:[''],
    apellidos:[''],
    sueldo:[''],
    edad:[''],
    horasExtras:[''],
    sueldoAnual:['']
  })

  ngOnInit(): void {
    for(let i=0;i<this.trabajador1.horasExtras.length;i++){
      this.horasTotales = this.horasTotales + this.trabajador1.horasExtras[i]

    }
    this.trabajador1.sueldoAnual = this.horasTotales + this.trabajador1.sueldo
    this.trabajadores.push(this.trabajador1)
  }
  submit(){
    const nuevoTrabajador: Trabajador = {
      nombre: this.formTrabajador.get('nombre')?.value || '', // Asigna una cadena vacía si el valor es nulo o undefined
      apellidos: this.formTrabajador.get('apellidos')?.value || '',
      sueldo: parseFloat(this.formTrabajador.get('sueldo')?.value || ''),
      edad: '', // Ajusta según tus necesidades
      horasExtras: [], // Ajusta según tus necesidades
      sueldoAnual: 0 // Ajusta según tus necesidades
    };

    this.trabajadores.push(nuevoTrabajador)
    this.formTrabajador.reset()
  }



  protected readonly parseInt = parseInt;
}
