import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
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

  Calcular(): void {

    const precio= 12;
    const nombre = this.formularioc.value.nombre;
    const compradores = this.formularioc.value.compradores;
    const boletos = this.formularioc.value.boletos;
    const tarjeta = this.formularioc.value.tarjeta;

    //Condicion de Prueba
    if(nombre == ''  ||  compradores == 0){
      this.mensaje = 'No Haz llenado los campos, llenalos Porfavor :)';
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
    if (tarjeta == 'si'){
      descuentot = 0.10;
    }else if(tarjeta == 'no'){
      descuentot = 0;
    }

    let totaldescuento = totalpago * descuentot;
    totalpago = totalpago - totaldescuento;

    this.nombre = nombre;
    this.total = totalpago;
    this.mensaje = 'Compra realizada correctamente';
    
    }

  Salir(): void {
    this.mensaje = '';
    this.nombre = '';
    this.total = 0;
    this.formularioc.reset();
  } 
}