ALTER TABLE pessoa_fisica
DROP CONSTRAINT pessoa_fisica_cpf_key;

ALTER TABLE pessoa_fisica
DROP CONSTRAINT pessoa_fisica_email_key;

CREATE UNIQUE INDEX unique_cpf_pessoa_fisica_index
ON pessoa_fisica (cpf)
WHERE deletado IS false;

CREATE UNIQUE INDEX unique_email_pessoa_fisica_index
ON pessoa_fisica (email)
WHERE deletado IS false;