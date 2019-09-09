import { Component, OnInit } from '@angular/core';
import { Conta } from './conta/conta.model';
import { ContasService } from './contas.service';

@Component({
  selector: 'cb-contas',
  templateUrl: './contas.component.html'
})
export class ContasComponent implements OnInit {

  contas: Array<Conta> = [];

  constructor(private contasService: ContasService) { }

  ngOnInit() {

    this.contasService.buscarContas().subscribe(response => this.contas = response.data);
  }

}
