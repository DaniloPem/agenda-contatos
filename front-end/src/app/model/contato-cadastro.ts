import { EnderecoCadastro } from './endereco-cadastro';

export interface ContatoCadastro {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  endereco: EnderecoCadastro;
}
