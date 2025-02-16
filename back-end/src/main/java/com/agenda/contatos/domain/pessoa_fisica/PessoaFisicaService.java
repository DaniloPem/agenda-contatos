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

    public DadosVisualizacaoPessoaFisica pegarPessoaFisicaPorId(Long id) {
        Optional<PessoaFisica> pessoaFisicaOptional = pessoaFisicaRepository.findById(id);
        PessoaFisica pessoaFisica = pessoaFisicaOptional.orElseThrow(() -> new DataIntegrityViolationException("PESSOA FÍSCA NÃO EXISTE"));
        return new DadosVisualizacaoPessoaFisica(pessoaFisica);
    }

    public PessoaFisica criarPessoaFisica(DadosCadastroPessoaFisica dadosCadastroPessoaFisica) {
        Endereco endereco = getEnderco(dadosCadastroPessoaFisica.enderecoId());
        PessoaFisica pessoaFisica = new PessoaFisica(dadosCadastroPessoaFisica, endereco);
        return pessoaFisicaRepository.save(pessoaFisica);
    }

    public PessoaFisica editarPessoFisica(Long id, DadosCadastroPessoaFisica dadosCadastroPessoaFisica) {
        Optional<PessoaFisica> pessoaFisicaOptional = pessoaFisicaRepository.findById((id));
        PessoaFisica pessoaFisica = pessoaFisicaOptional.orElseThrow(() -> new DataIntegrityViolationException("PESSOA FÍSICA NÃO EXISTE."));
        pessoaFisica.setNome(dadosCadastroPessoaFisica.nome());
        pessoaFisica.setCpf(dadosCadastroPessoaFisica.cpf());
        pessoaFisica.setEmail(dadosCadastroPessoaFisica.email());
        pessoaFisica.setTelefone(dadosCadastroPessoaFisica.telefone());
        Endereco endereco = getEnderco(dadosCadastroPessoaFisica.enderecoId());
        pessoaFisica.setEndereco(endereco);
        return pessoaFisicaRepository.save(pessoaFisica);
    }

    private Endereco getEnderco(Long enderecoId) {
        Optional<Endereco> enderecoOptional = enderecoRepository.findById(enderecoId);
        return enderecoOptional.orElseThrow(() -> new DataIntegrityViolationException("ENDEREÇO NÃO EXISTE."));
    }

}
