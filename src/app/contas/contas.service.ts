import { Conta } from './conta/conta.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BANCO_API } from '../app.api';
import { Response } from './response.model';

@Injectable()
export class ContasService {

    constructor(
        private http: HttpClient
    ) { }


    buscarContas(): Observable<Response<Array<Conta>>> {

        return this.http.get<Response<Array<Conta>>>(`${BANCO_API}/contas`);
    }

    buscarContaPeloId(id: number): Observable<Response<Conta>> {

        return this.http.get<Response<Conta>>(`${BANCO_API}/contas/${id}`);
    }

    atualizarConta(conta: Conta): Observable<Response<Conta>> {

        return this.http.put<Response<Conta>>(`${BANCO_API}/contas/${conta.id}`, conta);
    }
}