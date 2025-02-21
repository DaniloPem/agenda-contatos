package com.agenda.contatos.domain.pessoa_fisica;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PessoaFisicaRepository extends JpaRepository<PessoaFisica, Long> {

    @Query("""
            SELECT pf FROM PessoaFisica pf
            WHERE pf.nome ILIKE :filtro OR
            pf.cpf LIKE REPLACE(REPLACE(REPLACE(:filtro, '.', ''), '-', ''), ' ', '')
            ORDER BY pf.nome
            """)
    Page<PessoaFisica> findByFiltro(String filtro, Pageable pageable);

    Optional<PessoaFisica> findByCpfAndIdNot(String cpf, Long id);

    Optional<PessoaFisica> findByEmailAndIdNot(String email, Long id);
}
