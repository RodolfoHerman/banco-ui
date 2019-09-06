import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ContasComponent } from './contas/contas.component';
import { ContaComponent } from './contas/conta/conta.component'
import { ContasService } from './contas/contas.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    CabecalhoComponent,
    ContasComponent,
    ContaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ContasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
