import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cliente } from '../cliente';

@Component({
  imports: [ReactiveFormsModule, RouterModule],
  selector: 'app-cinepolis',
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})
export class Cinepolis {
  formularioc!: FormGroup;
  mensaje: string = '';
  nombre: string = '';
  total: number = 0;

  ngOnInit(): void {
    this.formularioc = new FormGroup({
      nombre: new FormControl(''),
      compradores: new FormControl(''),
      boletos: new FormControl(''),
      tarjeta: new FormControl('')
    });
  }


  cliente:Cliente[]=[]
  nuevoCliente:Cliente = {
    compradores: '',
    nombre: '',
    boletos: '',
    total: '',
    tarjeta: ''
  };


  Calcular(): void {

    const precio= 12;
    const nombre = this.formularioc.value.nombre;
    const compradores = this.formularioc.value.compradores;
    const boletos = this.formularioc.value.boletos;
    const tarjeta = this.formularioc.value.tarjeta;

    //Condicion de Prueba
    if(

      this.nuevoCliente.compradores == '' ||

      this.nuevoCliente.nombre == '' ||

      this.nuevoCliente.boletos == '' ||

      this.nuevoCliente.tarjeta == '' 

    ){

      alert('Llena todos los campos porfavor');
      return;

    }

    //Condicion Inicial
    if(boletos < 1){
      this.mensaje = 'Minimo Compra 1';
      return;

    }else if (boletos > compradores * 7){
      this.mensaje = 'Maximo 7 por Persona'
      return;
    }

    let subtotal = boletos * precio;
    let descuento = 0

    //Segunda conficion
    if (boletos > 5){
      descuento = 0.15;
    }else if (boletos  <=3){
      descuento = 0.10;
    }
    
    let pagodescuento = descuento * subtotal;
    let totalpago = subtotal - pagodescuento;
    let descuentot = 0;

    //Tercera condicion
    if (tarjeta == 'Si'){
      descuentot = 0.10;
    }else if(tarjeta == 'No'){
      descuentot = 0;
    }

    let totaldescuento = totalpago * descuentot;
    totalpago = totalpago - totaldescuento;

    this.nombre = nombre;
    this.total = totalpago;
    this.mensaje = 'Compra realizada correctamente';
    

    this.nuevoCliente.total = String(this.total);
    
    this.cliente.push({...this.nuevoCliente});

    localStorage.setItem(
      'clientes',
      JSON.stringify(this.cliente)
    );
    
    }

  MuestraCliente(): void {
    this.nuevoCliente.nombre = this.formularioc.value.nombre;
    this.nuevoCliente.compradores = String(this.formularioc.value.compradores);
    this.nuevoCliente.boletos = String(this.formularioc.value.boletos);
    this.nuevoCliente.tarjeta = this.formularioc.value.tarjeta;


    this.Calcular();
  }

  Salir(): void {
    this.mensaje = '';
    this.nombre = '';
    this.total = 0;
    this.formularioc.reset();
  } 
}