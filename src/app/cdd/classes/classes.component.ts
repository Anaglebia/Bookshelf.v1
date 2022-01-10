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
       {_idGeneros:"0", nomeGenero:"Generalidades", decimalGenero:"00 ", livrosGenero:423},
       {_idGeneros:"1", nomeGenero:"Filosofia e pscoligia", decimalGenero:"00 ", livrosGenero:125},
       {_idGeneros:"2", nomeGenero:"Religião", decimalGenero:"00 ", livrosGenero:366},
       {_idGeneros:"3", nomeGenero:"Ciencias socias", decimalGenero:"00 ", livrosGenero:203},
       {_idGeneros:"4", nomeGenero:"Linguas", decimalGenero:"00 ", livrosGenero:123},
       {_idGeneros:"5", nomeGenero:"Ciencias naturais", decimalGenero:"00 ", livrosGenero:523},
       {_idGeneros:"6", nomeGenero:"Tecnologia e ciencias Aplicadas", decimalGenero:"00 ", livrosGenero:325},
       {_idGeneros:"7", nomeGenero:"Artes", decimalGenero:"00 ", livrosGenero:523},
       {_idGeneros:"8", nomeGenero:"Literatura Retorica", decimalGenero:"00 ", livrosGenero:655},
       {_idGeneros:"9", nomeGenero:"Geografia História e Biologia", decimalGenero:"00 ", livrosGenero:788},

  ];

  //o que vai ser mostrado no
  visaoColunas =['_idGeneros','nomeGenero','decimalGenero']

  constructor() {

   }

  ngOnInit(): void {
  }

}
