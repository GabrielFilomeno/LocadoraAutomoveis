import { Component, inject } from '@angular/core';
import { BotaoComponent } from "../botao/botao.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [BotaoComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  router = inject(Router)

  listaFavoritos: any[] = [];
  numFavoritos = 0;

  ngOnInit(): void {
    if (typeof window !== 'undefined' && localStorage) {
      const getListaFavoritos = localStorage.getItem('listaFavoritos');
      if (getListaFavoritos) {
        this.listaFavoritos = JSON.parse(getListaFavoritos);
        this.numFavoritos = this.listaFavoritos.length;
      }
    }
  }

  listagem() {
    const url = '/listagem';
    window.location.href = url;
  };

  favoritos() {
    const url = '/favoritos';
    window.location.href = url;
  }
}
