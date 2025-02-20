package com.agenda.contatos.domain.endereco;

import jakarta.validation.constraints.NotBlank;

public record DadosCadastroEndereco(
        @NotBlank(message = "CEP é obrigatório.")
        String cep,
        @NotBlank(message = "Logradouro é obrigatório.")
        String logradouro,
        @NotBlank(message = "Número é obrigatório.")
        Integer numero,
        String complemento,
        @NotBlank(message = "Bairro é obrigatório.")
        String bairro,
        @NotBlank(message = "Cidade é obrigatório.")
        String cidade,
        @NotBlank(message = "Estado é obrigatório.")
        String estado
) {
}
