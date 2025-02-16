package com.agenda.contatos.domain.pessoa_fisica;

import com.agenda.contatos.domain.endereco.Endereco;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DadosCadastroPessoaFisica(
        @NotBlank
        String nome,
        @NotBlank
        String cpf,
        @NotBlank
        String email,
        @NotBlank
        String telefone,
        @NotNull
        Long enderecoId
) {
}
