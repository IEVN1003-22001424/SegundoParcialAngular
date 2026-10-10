
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
  alumnos:IAlumno[]=[]

  nuevoAlumno: IAlumno = {
    matricula: '',
    nombre: '',
    correo: '',
    materia: ''
  };

  ngOnInit(): void {
    this.cargarAlumno()
    this.formulario = new FormGroup({
      matricula: new FormControl(''),
      nombre: new FormControl(''),
      correo: new FormControl(''),
      materia: new FormControl('')
    });
  }

  agregarAlumno(): void{
    if(

      this.nuevoAlumno.matricula == '' ||

      this.nuevoAlumno.nombre == '' ||

      this.nuevoAlumno.correo == '' ||

      this.nuevoAlumno.materia== '' 

    ){

      alert('Llena todos los campos porfavor');
      return;

    }
    //Spread (...) Sirve para compartir, copiar o combinar los elementos de un objeto 
    //o las propiedades dentro de una lista.
    this.alumnos.push({...this.nuevoAlumno})

    //LocalStorage no es una base de datos temporal, sino una característica de almacenamiento 
    //web nativa del navegador que permite guardar datos de manera permanente
    localStorage.setItem(

      'alumnos',
      JSON.stringify(this.alumnos)

    )
  }

  muestraAlumno(): void {

    this.nuevoAlumno.matricula = this.formulario.value.matricula;

    this.nuevoAlumno.nombre = this.formulario.value.nombre;

    this.nuevoAlumno.correo = this.formulario.value.correo;

    this.nuevoAlumno.materia = this.formulario.value.materia;
    
    this.agregarAlumno()

  }

  cargarAlumno(): void{

    const datos = localStorage.getItem('alumnos');

    if (datos){

      this.alumnos = JSON.parse(datos);

    }

  }

}