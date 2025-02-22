package com.agenda.contatos.domain.pessoa_fisica;

import com.agenda.contatos.domain.endereco.Endereco;
import com.agenda.contatos.domain.endereco.EnderecoRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
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
        PessoaFisica pessoaFisica = pessoaFisicaOptional.orElseThrow(() -> new DataIntegrityViolationException("CONTATO NÃO EXISTE."));
        return new DadosVisualizacaoPessoaFisica(pessoaFisica);
    }

    public PessoaFisicaPageDTO listarAllPessoasFisicas(String filtro, @PositiveOrZero int pagina, @Positive @Max(30) int tamanho) {
        Page<PessoaFisica> pessoaFisicaPage = pessoaFisicaRepository.findByFiltro(filtro + "%", PageRequest.of(pagina, tamanho));
        List<DadosVisualizacaoPessoaFisica> pessoaFisicas = pessoaFisicaPage.map(DadosVisualizacaoPessoaFisica::new).toList();
        return new PessoaFisicaPageDTO(pessoaFisicas, pessoaFisicaPage.getTotalElements(), pessoaFisicaPage.getTotalPages());
    }

    public PessoaFisica criarPessoaFisica(DadosCadastroPessoaFisica dadosCadastroPessoaFisica) {
        validarCpfUnico(dadosCadastroPessoaFisica, 0L);
        validarEmailUnico(dadosCadastroPessoaFisica, 0L);
        Endereco endereco = new Endereco(dadosCadastroPessoaFisica.endereco());
        PessoaFisica pessoaFisica = new PessoaFisica(dadosCadastroPessoaFisica, endereco);
        enviarNotificacaoPeloEmailDoCadastroDoContato(pessoaFisica);
        return pessoaFisicaRepository.save(pessoaFisica);
    }

    public PessoaFisica editarPessoFisica(Long id, DadosCadastroPessoaFisica dadosCadastroPessoaFisica) {
        validarCpfUnico(dadosCadastroPessoaFisica, id);
        validarEmailUnico(dadosCadastroPessoaFisica, id);
        Optional<PessoaFisica> pessoaFisicaOptional = pessoaFisicaRepository.findById((id));
        PessoaFisica pessoaFisica = pessoaFisicaOptional.orElseThrow(() -> new DataIntegrityViolationException("CONTATO NÃO EXISTE."));
        pessoaFisica.setNome(dadosCadastroPessoaFisica.nome());
        pessoaFisica.setCpf(dadosCadastroPessoaFisica.cpf());
        pessoaFisica.setEmail(dadosCadastroPessoaFisica.email());
        pessoaFisica.setTelefone(dadosCadastroPessoaFisica.telefone());
        setDadosEndereco(pessoaFisica.getEndereco(), dadosCadastroPessoaFisica);
        return pessoaFisicaRepository.save(pessoaFisica);
    }

    public void deletarPessoaFisica(Long id) {
        Optional<PessoaFisica> pessoaFisicaOptional = pessoaFisicaRepository.findById(id);
        PessoaFisica pessoaFisica = pessoaFisicaOptional.orElseThrow(() -> new DataIntegrityViolationException("CONTATO NÃO EXISTE."));
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

    private void enviarNotificacaoPeloEmailDoCadastroDoContato(PessoaFisica pessoaFisica) {
        var restTemplate = new RestTemplate();
        restTemplate.getForObject("https://run.mocky.io/v3/fddc68a4-1d19-4e65-b784-39dfa253936e?email=" + pessoaFisica.getEmail() + "&subject=Nova conta", String.class);
    }

    private void validarCpfUnico(DadosCadastroPessoaFisica dadosCadastroPessoaFisica, Long id) {
        Optional<PessoaFisica> contatoComCpfExistente = pessoaFisicaRepository.findByCpfAndIdNot(dadosCadastroPessoaFisica.cpf(), id);
        if (contatoComCpfExistente.isPresent()) {
            throw new DataIntegrityViolationException("JÁ EXISTE OUTRO CONTATO COM O MESMO CPF.");
        }
    }

    private void validarEmailUnico(DadosCadastroPessoaFisica dadosCadastroPessoaFisica, Long id) {
        Optional<PessoaFisica> contatoComEmailExistente = pessoaFisicaRepository.findByEmailAndIdNot(dadosCadastroPessoaFisica.email(), id);
        if (contatoComEmailExistente.isPresent()) {
            throw new DataIntegrityViolationException("JÁ EXISTE OUTRO CONTATO COM O MESMO EMAIL.");
        }
    }

}
