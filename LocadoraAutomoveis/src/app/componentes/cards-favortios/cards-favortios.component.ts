import { Component, inject } from '@angular/core';
import { BotaoComponent } from "../botao/botao.component";
import { ChamadasService } from '../../services/chamadas.service';
import { FormsModule } from '@angular/forms';
import { PipeAnoPipe } from '../../pipes/pipe-ano.pipe';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-favortios',
  standalone: true,
  imports: [BotaoComponent, FormsModule, PipeAnoPipe, CommonModule],
  templateUrl: './cards-favortios.component.html',
  styleUrl: './cards-favortios.component.css'
})
export class CardsFavortiosComponent {

  chamadasService = inject(ChamadasService);
  router = inject(Router)
  lista: any[] = [];
  listaFavoritos: any[] = [];
  pesquisar: string | undefined;
  btnVoltar = false;

  ngOnInit(): void {
    this.chamadasService.listagem().subscribe(data => {
      this.lista = data;
    });

    if (typeof window !== 'undefined' && localStorage) {
      const getListaFavoritos = localStorage.getItem('listaFavoritos');
      if (getListaFavoritos) {
        this.listaFavoritos = JSON.parse(getListaFavoritos);
      }

      this.lista = this.lista.filter(carro =>
        this.listaFavoritos.includes(carro.id));
      console.log(this.listaFavoritos)
      console.log(this.lista)
    }
  };

  verMais(id: number): void {
    const url = `/detalhes/${id}`;
    window.location.href = url;
  }

  realizarPesquisa() {
    if (!this.pesquisar) {
      window.alert('Preencha o campo para pesquisar.');
    } else {
      const textoNormalizado = this.pesquisar.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

      let resultado = this.lista.filter(carro =>
        carro.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() === textoNormalizado
      );
      if (resultado.length === 0) {
        window.alert('Carro não encontrado');
      } else {
        this.lista = resultado;
        this.pesquisar = '';
        this.btnVoltar = true;
      }
    }
  };

  voltar() {
    const url = '/favoritos';
    window.location.href = url;
  };
}
