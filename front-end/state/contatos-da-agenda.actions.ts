export class GetListaContatos {
  static readonly type = '[Contatos] Get';
  constructor(
    public payload: { filtro: string; pagina: number; tamanho: number }
  ) {}
}
