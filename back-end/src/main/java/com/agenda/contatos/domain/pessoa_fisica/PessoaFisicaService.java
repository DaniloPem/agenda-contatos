package com.agenda.contatos.domain.pessoa_fisica;

import com.agenda.contatos.domain.endereco.Endereco;
import com.agenda.contatos.domain.endereco.EnderecoRepository;
import jakarta.transaction.Transactional;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Transactional
public class PessoaFisicaService {

    private final PessoaFisicaRepository pessoaFisicaRepository;
    private final EnderecoRepository enderecoRepository;

    public PessoaFisicaService(PessoaFisicaRepository pessoaFisicaRepository, EnderecoRepository enderecoRepository) {
        this.pessoaFisicaRepository = pessoaFisicaRepository;
        this.enderecoRepository = enderecoRepository;
    }


    public PessoaFisica criarPessoaFisica(DadosCadastroPessoaFisica dadosCadastroPessoaFisica) {
        Endereco endereco = getEnderco(dadosCadastroPessoaFisica.enderecoId());
        PessoaFisica pessoaFisica = new PessoaFisica(dadosCadastroPessoaFisica, endereco);
        return pessoaFisicaRepository.save(pessoaFisica);
    }

    private Endereco getEnderco(Long enderecoId) {
        Optional<Endereco> enderecoOptional = enderecoRepository.findById(enderecoId);
        return enderecoOptional.orElseThrow(() -> new DataIntegrityViolationException("ENDEREÇO NÃO EXISTE."));
    }
}
