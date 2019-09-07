import { Component, OnInit } from '@angular/core';
import { Conta } from '../contas/conta/conta.model';
import { ContasService } from '../contas/contas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cb-conta-operacao',
  templateUrl: './conta-operacao.component.html'
})
export class ContaOperacaoComponent implements OnInit {

  conta: Conta;

  constructor(
    private contasService: ContasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.conta = this.contasService.buscarContaPeloId(this.route.snapshot.params['id']);
  }

}
