package com.agenda.contatos.domain.pessoa_fisica;

import com.agenda.contatos.domain.endereco.DadosCadastroEndereco;
import com.agenda.contatos.domain.endereco.Endereco;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DadosCadastroPessoaFisica(
        @NotBlank(message = "Nome é obrigatório.")
        String nome,
        @NotBlank(message = "CPF é obrigatório.")
        String cpf,
        @NotBlank(message = "E-mail é obrigatório.")
        String email,
        @NotBlank(message = "Telefone é obrigatório.")
        String telefone,
        @NotNull
        DadosCadastroEndereco endereco
) {
}
