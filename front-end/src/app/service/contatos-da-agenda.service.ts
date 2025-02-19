import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PessoasFisicasPagina } from '../model/pessoas-fisicas-pagina';
import { ContatoCadastro } from '../model/contato-cadastro';

@Injectable({
  providedIn: 'root',
})
export class ContatosDaAgendaService {
  private readonly API = 'http://localhost:8080/api/pessoa-fisica';

  constructor(private httpClient: HttpClient) {}

  getListaDeContatos(
    filtro: string,
    pagina: number,
    tamanho: number
  ): Observable<PessoasFisicasPagina> {
    const params: HttpParams = new HttpParams()
      .set('filtro', filtro)
      .set('pagina', pagina)
      .set('tamanho', tamanho);
    return this.httpClient.get<PessoasFisicasPagina>(`${this.API}`, { params });
  }

  addNovoContato(contatoRecord: Partial<ContatoCadastro>): Observable<number> {
    return this.httpClient.post<number>(`${this.API}`, contatoRecord);
  }
}
