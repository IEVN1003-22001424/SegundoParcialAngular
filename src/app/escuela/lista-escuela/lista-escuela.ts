
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface IAlumno {
  matricula: string;
  nombre: string;
  correo: string;
  materia: string;
}

@Component({
  selector: 'app-lista-escuela',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './lista-escuela.html',
  styleUrl: './lista-escuela.css'
})
export class ListaEscuela implements OnInit {

  indiceEdicion: number = -1;

  formulario!: FormGroup;

  alumnos: IAlumno[] = [];

  nuevoAlumno: IAlumno = {
    matricula: '',
    nombre: '',
    correo: '',
    materia: ''
  };

  ngOnInit(): void {

    this.formulario = new FormGroup({
      matricula: new FormControl(''),
      nombre: new FormControl(''),
      correo: new FormControl(''),
      materia: new FormControl('')
    });

    this.cargarAlumno();
  }

  agregarAlumno(): void {

    if (
      this.nuevoAlumno.matricula.trim() === '' ||
      this.nuevoAlumno.nombre.trim() === '' ||
      this.nuevoAlumno.correo.trim() === '' ||
      this.nuevoAlumno.materia.trim() === ''
    ) {
      alert('Llena todos los campos por favor');
      return;
    }

    if (this.indiceEdicion !== -1) {

      // Actualizar el alumno existente.
      this.alumnos[this.indiceEdicion] = {
        ...this.nuevoAlumno
      };

    } else {

      // Agregar un alumno nuevo una sola vez.
      this.alumnos.push({
        ...this.nuevoAlumno
      });

    }

    // Guardar la lista actualizada en LocalStorage.
    localStorage.setItem(
      'alumnos',
      JSON.stringify(this.alumnos)
    );

    // Limpiar el formulario y salir del modo edición.
    this.limpiarCampos();
  }

  muestraAlumno(): void {

    this.nuevoAlumno.matricula = this.formulario.value.matricula ?? '';
    this.nuevoAlumno.nombre = this.formulario.value.nombre ?? '';
    this.nuevoAlumno.correo = this.formulario.value.correo ?? '';
    this.nuevoAlumno.materia = this.formulario.value.materia ?? '';

    this.agregarAlumno();
  }

  cargarAlumno(): void {

    const datos = localStorage.getItem('alumnos');

    if (datos) {

      try {
        this.alumnos = JSON.parse(datos) as IAlumno[];
      } catch (error) {
        console.error('Error al cargar los alumnos:', error);
        this.alumnos = [];
      }

    }

  }

  eliminarAlumno(index: number): void {

    this.alumnos.splice(index, 1);

    localStorage.setItem(
      'alumnos',
      JSON.stringify(this.alumnos)
    );

    // Si se elimina el alumno que se estaba editando,
    // limpiar el formulario.
    if (this.indiceEdicion === index) {

      this.limpiarCampos();

    } else if (this.indiceEdicion > index) {

      // Ajustar el índice si se elimina un elemento anterior.
      this.indiceEdicion--;

    }

  }

  editarAlumnos(index: number): void {

    // Obtener el alumno seleccionado.
    const alumno = this.alumnos[index];

    // Copiar sus datos al objeto de edición.
    this.nuevoAlumno = {
      ...alumno
    };

    // Mostrar sus datos en el formulario.
    this.formulario.patchValue({
      matricula: alumno.matricula,
      nombre: alumno.nombre,
      correo: alumno.correo,
      materia: alumno.materia
    });

    // Activar el modo edición.
    this.indiceEdicion = index;
  }

  limpiarCampos(): void {

    this.nuevoAlumno = {
      matricula: '',
      nombre: '',
      correo: '',
      materia: ''
    };

    this.formulario.reset({
      matricula: '',
      nombre: '',
      correo: '',
      materia: ''
    });

    // Volver al modo de registro nuevo.
    this.indiceEdicion = -1;
  }

}
