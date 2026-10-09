
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Alumno } from '../alumno' 

interface IAlumno {
  matricula: string;
  nombre: string;
  correo: string;
  materia: string;
}

@Component({
  selector: 'app-lista-escuela',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './lista-escuela.html',
  styleUrl: './lista-escuela.css'
})
export class ListaEscuela {

  formulario!: FormGroup;

  nuevoAlumno: IAlumno = {
    matricula: 'xxx',
    nombre: 'xxx',
    correo: 'xxx',
    materia: 'xxx'
  };

  ngOnInit(): void {
    this.formulario = new FormGroup({
      matricula: new FormControl(''),
      nombre: new FormControl(''),
      correo: new FormControl(''),
      materia: new FormControl('')
    });
  }

  muestraAlumno(): void {

    this.nuevoAlumno.matricula = this.formulario.value.matricula;

    this.nuevoAlumno.nombre = this.formulario.value.nombre;

    this.nuevoAlumno.correo = this.formulario.value.correo;

    this.nuevoAlumno.materia = this.formulario.value.materia;

  }
}