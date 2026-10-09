import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-zodiaco',
  styleUrl: './zodiaco.css',
  templateUrl: './zodiaco.html',
})

export class Zodiaco {

  dia:number = 0;
  mes:number = 0;
  ano:number = 0;
  edad:number = 0;

  nombre:string = "";
  apaterno:string = "";
  amaterno:string = "";
  nc:string = "";

  sexo:string = "";
  sex:string = "";
  signo:string = "";
  Imagen:string = "";

  mostrar:boolean = false;

  Imprimir() {
    this.nc = this.nombre + " " + this.apaterno + " " + this.amaterno;
    
    let fecha = new Date();

    let anohoy = fecha.getFullYear();
    let meshoy = fecha.getMonth() + 1;
    let diahoy = fecha.getDate();

    this.edad = anohoy - this.ano;

    if (meshoy < this.mes || (meshoy === this.mes && diahoy < this.dia)) {
      this.edad--;
    }

    if(this.sexo == "Femenino"){
      this.sex = "Señorita";
    }else{
      this.sex = "Caballero";
    }
/* 
    if((this.mes == 3 && this.dia >= 21) || (this.mes == 4 && this.dia <= 19)){
      this.signo = "Aries";
      this.Imagen = "img/Aries.png";
    }else if((this.mes == 4 && this.dia >= 20) || (this.mes == 5 && this.dia <= 20)){
      this.signo = "Tauro";
      this.Imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB4LQTn0vRq4ydPLp-uTj_lEUHOHYWUU18JlCq5KuMw&s=10";
    }else if((this.mes == 5 && this.dia >= 21) || (this.mes == 6 && this.dia <= 20)){
      this.signo = "Geminis";
      this.Imagen = "img/Geminis.png";
    }else if((this.mes == 6 && this.dia >= 21) || (this.mes == 7 && this.dia <= 22)){
      this.signo = "Cancer";
      this.Imagen = "img/Cancer.png";
    }else if((this.mes == 7 && this.dia >= 23) || (this.mes == 8 && this.dia <= 22)){
      this.signo = "Leo";
      this.Imagen = "img/Leo.png"; 
    }else if((this.mes == 8 && this.dia >= 23) || (this.mes == 9 && this.dia <= 22)){
      this.signo = "Virgo";
      this.Imagen = "img/Virgo.png";
    }else if((this.mes == 9 && this.dia >= 23) || (this.mes == 10 && this.dia <= 22)){
      this.signo = "Libra";
      this.Imagen = "img/Libra.png";
    }else if((this.mes == 10 && this.dia >= 23) || (this.mes == 11 && this.dia <= 21)){
      this.signo = "Escorpio";
      this.Imagen = "img/Escorpio.png";
    }else if((this.mes == 11 && this.dia >= 22) || (this.mes == 12 && this.dia <= 21)){
      this.signo = "Sagitario";
      this.Imagen = "img/Sagitario.png";
    }else if((this.mes == 12 && this.dia >= 22) || (this.mes == 1 && this.dia <= 19)){
      this.signo = "Capricornio";
      this.Imagen = "img/Capricornio.png";
    }else if((this.mes == 1 && this.dia >= 20) || (this.mes == 2 && this.dia <= 18)){
      this.signo = "Acuario";
      this.Imagen = "img/Acuario.png";
    }else if((this.mes == 2 && this.dia >= 19) || (this.mes == 3 && this.dia <= 20)){
      this.signo = "Piscis";
      this.Imagen = "img/Piscis.png";
    } */
  

    
  /* Calendario Chino */
    if (this.ano == 2020 || this.ano == 2008 || this.ano == 1996 || this.ano == 1984 || this.ano == 1972) {
      this.signo = "Rata";
      this.Imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMf4LATIf02fIT7Sbt400mtXYPe5fVsjCooOSXcoCnfg&s";

    } else if (this.ano == 2021 || this.ano == 2009 || this.ano == 1997 || this.ano == 1985 || this.ano == 1973) {
      this.signo = "Buey";
      this.Imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbtCytIZsniMEhhptka8WampUOLvoDKtcULBl8k7ed-w&s=10";

    } else if (this.ano == 2022 || this.ano == 2010 || this.ano == 1998 || this.ano == 1986 || this.ano == 1974) {
      this.signo = "Tigre";
      this.Imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbr49XNzZXPS9f919fjunEMN9p2gKHc4Fmtce-dbF5vA&s=10";

    } else if (this.ano == 2023 || this.ano == 2011 || this.ano == 1999 || this.ano == 1987 || this.ano == 1975) {
      this.signo = "Conejo";
      this.Imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEgKPpLKAQ_GMTm2UE2_iHOamkAOGqwxTRo_j6iTkYdQ&s=10";

    } else if (this.ano == 2024 || this.ano == 2012 || this.ano == 2000 || this.ano == 1988 || this.ano == 1976) {
      this.signo = "Dragón";
      this.Imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbG6mDOx2jAqBpDLVMQd2Q-00FoOuSm1k1YFkxIWKNA&s=10";

    } else if (this.ano == 2025 || this.ano == 2013 || this.ano == 2001 || this.ano == 1989 || this.ano == 1977) {
      this.signo = "Serpiente";
      this.Imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYvPiaFafFiiOY-rof2X-za8vt-DgbvGkIbpELAI4vA&s=10";

    } else if (this.ano == 2026 || this.ano == 2014 || this.ano == 2002 || this.ano == 1990 || this.ano == 1978) {
      this.signo = "Caballo";
      this.Imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoLq1PSPjbnvnBTF5bkNvqBUWmKymIg6jpAdCSmeqNA&s=10";

    } else if (this.ano == 2027 || this.ano == 2015 || this.ano == 2003 || this.ano == 1991 || this.ano == 1979) {
      this.signo = "Cabra";
      this.Imagen = "https://img.magnific.com/vector-gratis/personaje-dibujos-animados-cabra-blanca_1308-108587.jpg?semt=ais_hybrid&w=740&q=80";

    } else if (this.ano == 2028 || this.ano == 2016 || this.ano == 2004 || this.ano == 1992 || this.ano == 1980) {
      this.signo = "Mono";
      this.Imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSon1dQ-VeNo69Ix4F714wbSaSQ6Ot2hG-ey1gdMQpO2A&s=10";

    } else if (this.ano == 2029 || this.ano == 2017 || this.ano == 2005 || this.ano == 1993 || this.ano == 1981) {
      this.signo = "Gallo";
      this.Imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6r9JR8AMovxCeEsoQwMslmPg7mXrFvOzpktkKa0HNTQ&s=10";

    } else if (this.ano == 2030 || this.ano == 2018 || this.ano == 2006 || this.ano == 1994 || this.ano == 1982) {
      this.signo = "Perro";
      this.Imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIy1n_P5SgJ2EQ455MNqKLwcgGYtAztxdY2f4i9uaHEQ&s=10";

    } else if (this.ano == 2031 || this.ano == 2019 || this.ano == 2007 || this.ano == 1995 || this.ano == 1983) {
      this.signo = "Cerdo";
      this.Imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMssBt_7gcEGXC2g_5SH-dd5DlsgGKMPa5O1X2_duJA&s=10";
    } 


    if(this.mostrar == false){
      this.mostrar = true; 
    }else{ 
      this.mostrar = false;
    }
  }



}