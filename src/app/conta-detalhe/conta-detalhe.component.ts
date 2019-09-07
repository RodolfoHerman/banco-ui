import { Component, OnInit, Input } from '@angular/core';
import { Conta } from '../contas/conta/conta.model';

@Component({
  selector: 'cb-conta-detalhe',
  templateUrl: './conta-detalhe.component.html'
})
export class ContaDetalheComponent implements OnInit {

  @Input() conta: Conta;

  constructor() { }

  ngOnInit() {
  }

}
