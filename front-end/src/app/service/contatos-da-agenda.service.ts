import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PessoasFisicasPagina } from '../model/pessoas-fisicas-pagina';
import { ContatoCadastro } from '../model/contato-cadastro';
import { DadosVisualizacaoPessoaFisica } from '../model/dados-visualizacao-pessoa-fisica';

@Injectable({
  providedIn: 'root',
})
export class ContatosDaAgendaService {
  private readonly API = 'http://localhost:8080/api/pessoa-fisica';
  private readonly API_EMAIL =
    'https://run.mocky.io/v3/fddc68a4-1d19-4e65-b784-39dfa253936e';

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

  getContato(id: number): Observable<DadosVisualizacaoPessoaFisica> {
    return this.httpClient.get<DadosVisualizacaoPessoaFisica>(
      `${this.API}/${id}`
    );
  }

  addNovoContato(contatoRecord: Partial<ContatoCadastro>): Observable<number> {
    return this.httpClient.post<number>(`${this.API}`, contatoRecord);
  }

  updateContato(
    contatoRecord: Partial<DadosVisualizacaoPessoaFisica>
  ): Observable<number> {
    return this.httpClient.put<number>(
      `${this.API}/${contatoRecord.id}`,
      contatoRecord
    );
  }

  deleteContato(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }

  getMensagemNotificacaoEmailEnviado() {
    return this.httpClient.get<{ mensagem: string }>(`${this.API_EMAIL}`);
  }
}
