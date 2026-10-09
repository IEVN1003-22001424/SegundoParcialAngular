import { Component, signal } from '@angular/core';
import { OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router'
import { initFlowbite } from 'flowbite';
import { FormsModule } from '@angular/forms'
import { RouterLink } from '@angular/router';

import { Zodiaco } from './formularios/zodiaco/zodiaco';
import { Navbar } from './navbar/navbar'
import { Distancia } from './formularios/distancia/distancia'
import { ListaEscuela } from './escuela/lista-escuela/lista-escuela'
import { Cinepolis } from './escuela/cinepolis/cinepolis'

@Component({
  imports: [
  /* Zodiaco, */
    RouterOutlet,
    RouterLink,
    FormsModule,
    Navbar,
    Distancia,
    ListaEscuela
  ],
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}