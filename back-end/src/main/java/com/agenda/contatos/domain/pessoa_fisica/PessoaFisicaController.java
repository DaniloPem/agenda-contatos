package com.agenda.contatos.domain.pessoa_fisica;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pessoa-fisica")
public class PessoaFisicaController {

    private final PessoaFisicaService pessoaFisicaService;

    public PessoaFisicaController(PessoaFisicaService pessoaFisicaService) {
        this.pessoaFisicaService = pessoaFisicaService;
    }

    @GetMapping("/{id}")
    public @ResponseBody DadosVisualizacaoPessoaFisica pegarPessoaFiscaPorId(@PathVariable Long id) {
        return pessoaFisicaService.pegarPessoaFisicaPorId(id);
    }

    @GetMapping()
    public @ResponseBody PessoaFisicaPageDTO listarAllPessoasFisicas(@RequestParam String filtro,
                                                                     @RequestParam(defaultValue = "0") @PositiveOrZero int pagina,
                                                                     @RequestParam(defaultValue = "30") @Positive @Max(30) int tamanho) {
        return pessoaFisicaService.listarAllPessoasFisicas(filtro, pagina, tamanho);
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

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarPessoaFisica(@PathVariable Long id) {
        pessoaFisicaService.deletarPessoaFisica(id);
        return ResponseEntity.noContent().build();
    }

}
