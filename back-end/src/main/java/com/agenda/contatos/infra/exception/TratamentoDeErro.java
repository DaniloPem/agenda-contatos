package com.agenda.contatos.infra.exception;

import jakarta.validation.ConstraintViolationException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class TratamentoDeErro {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity tratamentoArgumentNotValid(MethodArgumentNotValidException exception) {
        var erros = exception.getFieldErrors();
        return ResponseEntity.badRequest().body(erros.stream().findFirst().map(erro -> new MensagemException(erro.getDefaultMessage())).get());
    }

    @ExceptionHandler(ConstraintViolationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity tratamentoConstraintViolation(ConstraintViolationException exception) {
        var erro = exception.getConstraintViolations().stream().findFirst().get().getMessageTemplate();
        return ResponseEntity.badRequest().body(new MensagemException(erro));
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity tratamentoDataIntegrityViolation(DataIntegrityViolationException exception) {
        String erro = exception.getMostSpecificCause().getMessage();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new MensagemException(erro));
    }

    private record MensagemException(String mensagem) {
    }
}
