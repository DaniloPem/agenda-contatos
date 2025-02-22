# Agenda de Contatos

Este projeto é uma aplicação de agenda de contatos completa, construída com Angular 15, NGXS e Angular Material. Ele oferece uma interface amigável para gerenciar seus contatos, com funcionalidades como criação, edição, exclusão, listagem paginada, filtragem por nome e CPF e notificações por e-mail.

## Funcionalidades

- **Criar Contato:** Adição de novos contatos com informações detalhadas, como nome, CPF, e-mail, telefone e endereço.
- **Editar Contato:** Atualização das informações de contatos existentes.
- **Apagar Contato:** Remoção de contatos.
- **Listar Contatos com Paginação:** Visualizar os contatos com paginação que facilita navegação em grandes listas.
- **Filtrar Contatos por CPF e Nome:** Campo para filtro por CPF ou nome.
- **Notificação de E-mail:** O sistema envia notificações por e-mail sempre que um contato for criado, editado ou excluído - utilizando mock para a API de emails.

## Detalhamento

- **Tratamento de Exceptions:** Feito classe para tratamento de exceptions no backend. No front end, tratamento para exibir mensagem do back end em uma snackbar.
- **Validação dos cadastros:** Validação de CPFs e CEPs válidos. Validação CPFs e emails únicos, entre os registros não deletados.
- **Gerenciamento de estados:** Cadastros e leitura de informações do backend feito através de State com NGXS.
- **Reactive forms para formulários:** Todos os formulários foram feitos com utilização do Angular Reactive Forms.
- **Soft delete:** Utilziação da técnica de soft delete para os registros em banco de dados.
- **Envio de e-mails:** Envio de emails através de um mock de API pelo site mocky.io.
- **Migração de banco de dados:** Utilizado Flyway para gerenciamento de versões do banco de dados.
- **Segregação de tabelas:** Separado tabela de endereço e pessoa física de forma a organizar a arquitetura do sistema para receber novo tipo de cadastro futuro, sem duplicidade de código (exemplo: Pessoa Jurídica).
- **Pipes e máscaras:** Pipes para exibição de dados na tabela com máscara - CPF, email e telefone. Também utilizado NGX Mask para máscara em campos.

# Tecnologias utilizadas

## Front End

- **Angular 15**
- **NGXS**
- **Angular Material**
- **NGX Mask**

## Back End

- **Java 17**
- **Spring Boot 3.1.9**
- **Spring JPA**
- **FlywayDB**

## Banco de dados

- **PostgreSQL 17**
