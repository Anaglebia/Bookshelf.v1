import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {

  tituloNav = 'Bookshelf v1';
  tituloBarra = 'Sua Estante Virtual';
  iconeGeral='../../assets/imagens/ShelfBook.png';
  liIcone=80;
  alIcone=80;

  // controle do menu
  itensMenu = [
    {linkMenu:'/CDD', labelMenu:'Classes dewey', hab:true},
    {linkMenu:'/fedd', labelMenu:'Feed Noticias', hab:true},
    {linkMenu:'/clube', labelMenu:'Pagina Usuario', hab:false},
    {linkMenu:'/leitura', labelMenu:'Clubes de Leitura', hab:false},
    {linkMenu:'/estante', labelMenu:'Estante Particular', hab:false},
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
