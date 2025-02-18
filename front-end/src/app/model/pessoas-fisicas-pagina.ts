import { DadosVisualizacaoPessoaFisica } from './dados-visualizacao-pessoa-fisica';

export interface PessoasFisicasPagina {
  pessoasFisicas: DadosVisualizacaoPessoaFisica[];
  totalPessoasFisicas: number;
  totalPaginas: number;
}
