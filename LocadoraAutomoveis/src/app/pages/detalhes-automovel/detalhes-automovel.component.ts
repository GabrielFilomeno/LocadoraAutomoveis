import { Component, inject } from '@angular/core';
import { ChamadasService } from '../../services/chamadas.service';
import { BotaoComponent } from "../../componentes/botao/botao.component";
import { PipeAnoPipe } from "../../pipes/pipe-ano.pipe";
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-detalhes-automovel',
  standalone: true,
  imports: [BotaoComponent, PipeAnoPipe],
  templateUrl: './detalhes-automovel.component.html',
  styleUrl: './detalhes-automovel.component.css'
})
export class DetalhesAutomovelComponent {

  chamadasService = inject(ChamadasService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  automovel: any = {};
  favoritoBoolean: Boolean = false;
  favoritoCoracao: String = "";
  listaFavoritos: number[] = [];


  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params: any) => {
        this.chamadasService.detalhamento(params.id).subscribe({
          next: (data) => {
            this.automovel = data;
          },
          error: (error) => { console.log("Erro do detalhamento", error) }
        })
      },
      error: (error) => { console.log("Erro do params", error) }
    })

    if (typeof window !== 'undefined' && localStorage) {
      const getListaFavoritos = localStorage.getItem('listaFavoritos');
      if (getListaFavoritos) {
        this.listaFavoritos = JSON.parse(getListaFavoritos);
        if (this.verificarFavorito()) {
          this.favoritoBoolean = true;
          this.favoritoCoracao = "❤️";

        } else {
          this.favoritoBoolean = false;
          this.favoritoCoracao = "🤍";
        }

      } else {
        this.favoritoBoolean = false;
        this.favoritoCoracao = "🤍";
        localStorage.setItem('listaFavoritos', JSON.stringify(this.listaFavoritos));
      }
    } 
  };

  favoritar() {
    if (!this.favoritoBoolean) {
      this.favoritoCoracao = "❤️";
      this.favoritoBoolean = true;
      window.alert("Adicionado aos favoritos!")
      this.listaFavoritos.push(this.automovel.id)
      localStorage.setItem('listaFavoritos', JSON.stringify(this.listaFavoritos));
      window.location.reload();
    } else {
      this.favoritoCoracao = "🤍";
      this.favoritoBoolean = false;
      window.alert("Removido dos favoritos!")
      this.listaFavoritos = this.listaFavoritos.filter(id => this.automovel.id !== id)
      localStorage.setItem('listaFavoritos', JSON.stringify(this.listaFavoritos));
      window.location.reload();
    }
  }

  alugar() {
    window.alert("Carro reservado.")
  }

  voltar() {
    const url = '/listagem';
    window.location.href = url;
  }

  verificarFavorito(): boolean {
    const favorito: boolean = this.listaFavoritos.includes(this.automovel.id)
    return favorito;
  }

}
