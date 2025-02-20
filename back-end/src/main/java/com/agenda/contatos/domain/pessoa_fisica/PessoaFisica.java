package com.agenda.contatos.domain.pessoa_fisica;

import com.agenda.contatos.domain.endereco.Endereco;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import org.hibernate.annotations.Where;
import org.hibernate.validator.constraints.br.CPF;

@Entity
@Where(clause = "deletado = FALSE")
public class PessoaFisica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    @CPF(message = "CPF inválido.")
    private String cpf;
    @Email(message = "E-mail inválido.")
    private String email;
    private String telefone;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "endereco_id")
    private Endereco endereco;
    private boolean deletado;

    public PessoaFisica() {}

    public PessoaFisica(DadosCadastroPessoaFisica dadosCadastroPessoaFisica, Endereco endereco) {
        this.nome = dadosCadastroPessoaFisica.nome();
        this.cpf = dadosCadastroPessoaFisica.cpf();
        this.email = dadosCadastroPessoaFisica.email();
        this.telefone = dadosCadastroPessoaFisica.telefone();
        this.endereco = endereco;
        this.deletado = false;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public Endereco getEndereco() {
        return endereco;
    }
    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }
    public void deletarPessoaFisica() {
        this.deletado = true;
    }
    public Long getEnderecoId() {
        return endereco.getId();
    }
    public String getEnderecoLogradouro() {
        return endereco.getLogradouro();
    }
    public String getEnderecoCep() {
        return endereco.getCep();
    }
    public Integer getEnderecoNumero() {
        return endereco.getNumero();
    }
    public String getEnderecoComplemento() {
        return endereco.getComplemento();
    }
    public String getEnderecoBairro() {
        return endereco.getBairro();
    }
    public String getEnderecoCidade() {
        return endereco.getCidade();
    }
    public String getEnderecoEstado() {
        return endereco.getEstado();
    }

}
