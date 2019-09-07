import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContasComponent } from './contas/contas.component';
import { ContaOperacaoComponent } from './conta-operacao/conta-operacao.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contas', component: ContasComponent },
    { path: 'contas/:id', component: ContaOperacaoComponent },
    { path: 'sobre', component: SobreComponent }
]

