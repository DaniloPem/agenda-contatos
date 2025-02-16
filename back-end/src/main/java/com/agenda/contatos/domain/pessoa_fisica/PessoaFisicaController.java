package com.agenda.contatos.domain.pessoa_fisica;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/db/pessoa-fisica")
public class PessoaFisicaController {

    private final PessoaFisicaService pessoaFisicaService;

    public PessoaFisicaController(PessoaFisicaService pessoaFisicaService) {
        this.pessoaFisicaService = pessoaFisicaService;
    }

    @GetMapping("/{id}")
    public @ResponseBody DadosVisualizacaoPessoaFisica pegarPessoaFiscaPorId(@PathVariable Long id) {
        return pessoaFisicaService.pegarPessoaFisicaPorId(id);
    }

    @PostMapping
    public ResponseEntity<Long> criarPessoaFisica(@RequestBody @Valid DadosCadastroPessoaFisica dadosCadastroPessoaFisica) {
        return ResponseEntity.ok(pessoaFisicaService.criarPessoaFisica(dadosCadastroPessoaFisica).getId());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Long> editarPessoaFisica(@PathVariable Long id, @RequestBody @Valid DadosCadastroPessoaFisica dadosCadastroPessoaFisica) {
        pessoaFisicaService.editarPessoFisica(id, dadosCadastroPessoaFisica);
        return ResponseEntity.ok(id);
    }
}
