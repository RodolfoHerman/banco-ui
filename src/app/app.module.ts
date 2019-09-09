import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms'
import locatePt from '@angular/common/locales/pt';

registerLocaleData(locatePt, 'pt');

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ContasComponent } from './contas/contas.component';
import { ContaComponent } from './contas/conta/conta.component'
import { ContasService } from './contas/contas.service';
import { ContaOperacaoComponent } from './conta-operacao/conta-operacao.component';
import { ContaDetalheComponent } from './conta-detalhe/conta-detalhe.component';
import { registerLocaleData } from '@angular/common';
import { RadioComponent } from './componentes/radio/radio.component';
import { HttpClientModule } from '@angular/common/http';
import { ContaSucessoComponent } from './conta-sucesso/conta-sucesso.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    CabecalhoComponent,
    ContasComponent,
    ContaComponent,
    ContaOperacaoComponent,
    ContaDetalheComponent,
    RadioComponent,
    ContaSucessoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ContasService,
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
