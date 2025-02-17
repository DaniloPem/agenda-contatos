package com.agenda.contatos.domain.endereco;

import jakarta.validation.constraints.NotBlank;

public record DadosCadastroEndereco(
        @NotBlank
        String cep,
        @NotBlank
        String logradouro,
        @NotBlank
        Integer numero,
        String complemento,
        @NotBlank
        String bairro,
        @NotBlank
        String cidade,
        @NotBlank
        String estado
) {
}
