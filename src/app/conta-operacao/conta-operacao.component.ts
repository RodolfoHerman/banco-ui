import { Component, OnInit } from '@angular/core';
import { Conta } from '../contas/conta/conta.model';
import { ContasService } from '../contas/contas.service';
import { ActivatedRoute } from '@angular/router';
import { RadioOption } from '../componentes/radio/radio-option.model';

@Component({
  selector: 'cb-conta-operacao',
  templateUrl: './conta-operacao.component.html'
})
export class ContaOperacaoComponent implements OnInit {

  conta: Conta;

  options: Array<RadioOption> = [
    {rotulo: "Depósito", valor: "DEP", id: "radio_dep"},
    {rotulo: "Saque", valor: "SAQ", id: "radio_saq"}
  ];

  constructor(
    private contasService: ContasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.conta = this.contasService.buscarContaPeloId(this.route.snapshot.params['id']);
  }

}
