package com.agenda.contatos.domain.pessoa_fisica;

public record DadosVisualizacaoPessoaFisica(
        Long id,
        String nome,
        String cpf,
        String email,
        String telefone,
        Long enderecoId
) {
    public DadosVisualizacaoPessoaFisica(PessoaFisica pessoaFisica) {
        this(pessoaFisica.getId(),
                pessoaFisica.getNome(),
                pessoaFisica.getCpf(),
                pessoaFisica.getEmail(),
                pessoaFisica.getTelefone(),
                pessoaFisica.getEnderecoId()
                );
    }
}
