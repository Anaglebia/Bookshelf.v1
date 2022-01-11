import { Generos } from './../modelos/generos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  //arrei de livros
  livrosGeneros:Generos[]=[
       
  ];

  //o que vai ser mostrado na tabela
  visaoColunas =['_idGeneros','nomeGenero','decimalGenero']

  constructor() {

   }

  ngOnInit(): void {
  }

}
