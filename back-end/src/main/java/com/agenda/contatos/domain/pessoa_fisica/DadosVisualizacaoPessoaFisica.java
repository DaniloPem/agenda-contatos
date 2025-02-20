package com.agenda.contatos.domain.pessoa_fisica;

public record DadosVisualizacaoPessoaFisica(
        Long id,
        String nome,
        String cpf,
        String email,
        String telefone,
        Long enderecoId,
        String enderecoCep,
        String enderecoLogradouro,
        Integer enderecoNumero,
        String enderecoComplemento,
        String enderecoBairro,
        String enderecoCidade,
        String enderecoEstado

) {
    public DadosVisualizacaoPessoaFisica(PessoaFisica pessoaFisica) {
        this(pessoaFisica.getId(),
                pessoaFisica.getNome(),
                pessoaFisica.getCpf(),
                pessoaFisica.getEmail(),
                pessoaFisica.getTelefone(),
                pessoaFisica.getEnderecoId(),
                pessoaFisica.getEnderecoCep(),
                pessoaFisica.getEnderecoLogradouro(),
                pessoaFisica.getEnderecoNumero(),
                pessoaFisica.getEnderecoComplemento(),
                pessoaFisica.getEnderecoBairro(),
                pessoaFisica.getEnderecoCidade(),
                pessoaFisica.getEnderecoEstado()
                );
    }
}
