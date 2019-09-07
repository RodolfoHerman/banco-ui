import { Conta } from './conta/conta.model';
import { Observable } from 'rxjs';

export class ContasService {

    private contas: Array<Conta> = [
        {
            id: 1,
            saldo: 300.00,
            deposito: null,
            valor: null,
            dataCriacao: '2019-09-05',
            dataAtualizacao: '2019-09-06'
        },
        {
            id: 2,
            saldo: 150.00,
            deposito: null,
            valor: null,
            dataCriacao: '2019-09-03',
            dataAtualizacao: '2019-09-04'
        },
        {
            id: 3,
            saldo: 255.00,
            deposito: null,
            valor: null,
            dataCriacao: '2019-09-01',
            dataAtualizacao: '2019-09-03'
        },
        {
            id: 4,
            saldo: 50000.00,
            deposito: null,
            valor: null,
            dataCriacao: '2019-09-04',
            dataAtualizacao: '2019-09-06'
        }
    ];

    constructor() { }


    buscarContas(): Array<Conta> {

        return this.contas;
    }

    buscarContaPeloId(id: number): Conta {

        return this.contas.find(conta => conta.id == id);
    }
}