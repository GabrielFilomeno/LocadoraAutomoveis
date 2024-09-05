import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ChamadasService } from '../../services/chamadas.service';
import { BotaoComponent } from "../botao/botao.component";
import { PipeAnoPipe } from "../../pipes/pipe-ano.pipe";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, BotaoComponent, PipeAnoPipe, FormsModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  chamadasService = inject(ChamadasService);
  router = inject(Router)
  lista: any[] = [];
  pesquisar: string | undefined;
  btnVoltar = false;

  ngOnInit(): void {
    this.chamadasService.listagem().subscribe(data => {
      this.lista = data;
    });
  };

  verMais(id: number): void {
    const url = `/detalhes/${id}`;
    window.location.href = url; // Redireciona para a URL especificada
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
    window.location.reload();
  };
}
