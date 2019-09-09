import { Component, OnInit } from '@angular/core';
import { Conta } from '../contas/conta/conta.model';
import { ContasService } from '../contas/contas.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.contasService.buscarContaPeloId(this.route.snapshot.params['id']).subscribe(response => this.conta = response.data);
  }

  realizarOperacao(form: any): void {

    this.conta.valor    = form.valor;
    this.conta.deposito = form.optionOperacao == "DEP" ? true : false;

    this.contasService.atualizarConta(this.conta).subscribe(dados => this.router.navigate(['/contas-sucesso']));
  }
  
}
