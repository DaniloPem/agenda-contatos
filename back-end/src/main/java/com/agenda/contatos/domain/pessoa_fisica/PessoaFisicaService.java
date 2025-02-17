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
        Endereco endereco = new Endereco(dadosCadastroPessoaFisica.endereco());
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
        setDadosEndereco(pessoaFisica.getEndereco(), dadosCadastroPessoaFisica);
        return pessoaFisicaRepository.save(pessoaFisica);
    }

    public void deletarPessoaFisica(Long id) {
        Optional<PessoaFisica> pessoaFisicaOptional = Optional.of(pessoaFisicaRepository.getReferenceById(id));
        PessoaFisica pessoaFisica = pessoaFisicaOptional.orElseThrow(() -> new DataIntegrityViolationException("PESSOA FÍSICA NÃO EXISTE."));
        pessoaFisica.deletarPessoaFisica();
        pessoaFisicaRepository.save(pessoaFisica);
    }

    private Endereco setDadosEndereco(Endereco endereco, DadosCadastroPessoaFisica dadosCadastroPessoaFisica) {
        endereco.setCep(dadosCadastroPessoaFisica.endereco().cep());
        endereco.setLogradouro(dadosCadastroPessoaFisica.endereco().logradouro());
        endereco.setNumero(dadosCadastroPessoaFisica.endereco().numero());
        endereco.setComplemento(dadosCadastroPessoaFisica.endereco().complemento());
        endereco.setBairro(dadosCadastroPessoaFisica.endereco().bairro());
        endereco.setCidade(dadosCadastroPessoaFisica.endereco().cidade());
        endereco.setEstado(dadosCadastroPessoaFisica.endereco().estado());
        return enderecoRepository.save(endereco);
    }

}
