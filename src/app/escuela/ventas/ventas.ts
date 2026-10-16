
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Cliente } from '../cliente';

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-ventas',
  styleUrl: './ventas.css',
  templateUrl: './ventas.html',
})
export class Ventas implements OnInit {

  indiceEdicion: number = -1;
  ver:boolean = false;
  formulario!: FormGroup;

  cliente: Cliente[] = [];

  ngOnInit(): void {

    // Recuperar los clientes que ya están guardados en la base de mi pagina.
    const datos = localStorage.getItem('clientes');

    if (datos) {
      this.cliente = JSON.parse(datos);
    }

    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      compradores: new FormControl(''),
      boletos: new FormControl(''),
      tarjeta: new FormControl(''),
      total: new FormControl('')
    });

  }

  editarClientes(index: number): void {

    const clienteSeleccionado = this.cliente[index];

    this.formulario.patchValue({
      nombre: clienteSeleccionado.nombre,
      compradores: clienteSeleccionado.compradores,
      boletos: clienteSeleccionado.boletos,
      tarjeta: clienteSeleccionado.tarjeta,
      total: clienteSeleccionado.total
    });

    this.indiceEdicion = index;
    this.ver = true;
  }


  guardarCambios(): void {

    if (this.indiceEdicion === -1) {
      return;
    }

    const clienteActualizado: Cliente = {
      ...this.cliente[this.indiceEdicion],
      ...this.formulario.value
    };
    
    
    this.cliente[this.indiceEdicion] = clienteActualizado;

    // Actualizar los datos en localStorage.
    localStorage.setItem(
      'clientes',
      JSON.stringify(this.cliente)
    );

    // Finalizar la edición.
    this.indiceEdicion = -1;
    this.formulario.reset();

  }

  // Eliminar un cliente.
  eliminarClientes(index: number): void {

    this.cliente.splice(index, 1);

    // Actualizar los datos en localStorage.
    localStorage.setItem(
      'clientes',
      JSON.stringify(this.cliente)
    );

    // Finalizar la edición si se elimina el cliente editado.
    if (this.indiceEdicion === index) {

      this.indiceEdicion = -1;
      this.formulario.reset();

    } else if (this.indiceEdicion > index) {

      this.indiceEdicion--;

    }

  }

}
