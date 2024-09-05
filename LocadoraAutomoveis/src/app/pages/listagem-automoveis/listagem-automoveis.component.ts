import { Component } from '@angular/core';
import { CardsComponent } from "../../componentes/cards/cards.component";

@Component({
  selector: 'app-listagem-automoveis',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './listagem-automoveis.component.html',
  styleUrl: './listagem-automoveis.component.css'
})
export class ListagemAutomoveisComponent {

}
