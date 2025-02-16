package com.agenda.contatos.domain.pessoa_fisica;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/db/pessoa-fisica")
public class PessoaFisicaController {

    private final PessoaFisicaService pessoaFisicaService;

    public PessoaFisicaController(PessoaFisicaService pessoaFisicaService) {
        this.pessoaFisicaService = pessoaFisicaService;
    }

    @PostMapping
    public ResponseEntity<Long> criarPessoaFisica(DadosCadastroPessoaFisica dadosCadastroPessoaFisica) {
        return ResponseEntity.ok(pessoaFisicaService.criarPessoaFisica(dadosCadastroPessoaFisica).getId());
    }
}
