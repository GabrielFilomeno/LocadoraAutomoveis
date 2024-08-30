import { Routes } from '@angular/router';
import { ListagemAutomoveisComponent } from './pages/listagem-automoveis/listagem-automoveis.component';
import { DetalhesAutomovelComponent } from './pages/detalhes-automovel/detalhes-automovel.component';

export const routes: Routes = [
    {
        path: '',
        component: ListagemAutomoveisComponent
    },
    {
        path: 'listagem',
        component: ListagemAutomoveisComponent
    },
    {
        path: 'detalhes',
        component: DetalhesAutomovelComponent
    }
];
