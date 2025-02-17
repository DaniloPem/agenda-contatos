package com.agenda.contatos.domain.pessoa_fisica;

import java.util.List;

public record PessoaFisicaPageDTO(List<DadosVisualizacaoPessoaFisica> pessoasFisicas, long totalPessoasFisicas, int totalPaginas) {
}
