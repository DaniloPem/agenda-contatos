package com.agenda.contatos.domain.endereco;

import com.agenda.contatos.domain.pessoa_fisica.PessoaFisica;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

@Entity
public class Endereco {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Size(min = 8, max = 8, message = "CEP inválido.")
    private String cep;
    private String logradouro;
    private Integer numero;
    private String complemento;
    private String bairro;
    private String cidade;
    private String estado;
    @OneToOne(mappedBy = "endereco", fetch = FetchType.LAZY)
    private PessoaFisica pessoaFisica;

    public Endereco() {
    }

    public Endereco(DadosCadastroEndereco dadosCadastroEndereco) {
        this.cep = dadosCadastroEndereco.cep();
        this.logradouro = dadosCadastroEndereco.logradouro();
        this.numero = dadosCadastroEndereco.numero();
        this.complemento = dadosCadastroEndereco.complemento();
        this.bairro = dadosCadastroEndereco.bairro();
        this.cidade = dadosCadastroEndereco.cidade();
        this.estado = dadosCadastroEndereco.estado();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public Integer getNumero() {
        return numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
}
