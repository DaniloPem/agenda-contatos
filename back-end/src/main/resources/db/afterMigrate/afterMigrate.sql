INSERT INTO endereco (cep, logradouro, numero, complemento, bairro, cidade, estado) VALUES
('86000-000', 'Rua Exemplo 1', 10, 'Apto 101', 'Centro', 'Londrina', 'PR'),
('86000-001', 'Avenida Exemplo 2', 20, 'Casa', 'Vila Nova', 'Londrina', 'PR'),
('86000-002', 'Rua Exemplo 3', 30, 'Loja', 'Gleba Palhano', 'Londrina', 'PR'),
('86000-003', 'Rua Exemplo 4', 40, 'Fundos', 'Jardim Higienópolis', 'Londrina', 'PR'),
('86000-004', 'Rua Exemplo 5', 50, '', 'Centro', 'Cambé', 'PR');

INSERT INTO pessoa_fisica (nome, cpf, email, telefone, endereco_id) VALUES
('João da Silva', '123.456.789-00', 'joao.silva@email.com', '(43) 99999-9999', 1),
('Maria Souza', '987.654.321-00', 'maria.souza@email.com', '(43) 88888-8888', 2),
('José Pereira', '111.222.333-44', 'jose.pereira@email.com', '(43) 77777-7777', 3),
('Ana Paula', '555.666.777-88', 'ana.paula@email.com', '(43) 66666-6666', 4),
('Carlos Rodrigues', '999.000.111-22', 'carlos.rodrigues@email.com', '(43) 55555-5555', 5);