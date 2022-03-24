export type Nullable<T> = T | null;

export interface Instituicao {
  id: number;
  nome: Nullable<string>;
  sigla: Nullable<string>;
  cidade: Nullable<string>;
  estado: Nullable<string>;
  edicoes?: Edicao[];
  escritas?: Escrita[];
}

export interface Edicao {
  id: number;
  edicao: Nullable<string>;
  ano: Nullable<number>;
  instituicaoId: Nullable<number>;
  instituicao?: Instituicao;
  eventoId: Nullable<number>;
  evento?: Evento;
  trilhas?: Trilha[];
  publicacoes?: Publicacao[];
}

export interface Evento {
  id: number;
  nome: Nullable<string>;
  edicoes?: Edicao[];
}

export interface Trilha {
  id: number;
  nome: Nullable<string>;
  edicaoId: Nullable<number>;
  edicao?: Edicao;
  publicacoes?: Publicacao[];
}

export interface Academico {
  id: number;
  nome: Nullable<string>;
  titulacao: Nullable<string>;
  escritas?: Escrita[];
  orientacoes?: Orientacao[];
}

export interface Tag {
  id: number;
  tag: Nullable<string>;
  publicacoes?: Publicacao[];
  publicacoesTags?: PublicacaoTag[];
}

export interface PalavraChave {
  id: number;
  palavraChave: Nullable<string>;
}

export interface Publicacao {
  id: number;
  titulo: Nullable<string>;
  edicaoId: Nullable<number>;
  edicao?: Edicao;
  trilhaId: Nullable<number>;
  trilha?: Trilha;
  tags?: Tag[];
  publicacoesTags?: PublicacaoTag[];
  publicacoesPalavrasChave?: PublicacaoPalavraChave[];
  escritas?: Escrita[];
}

export interface PublicacaoTag {
  id: number;
  publicacaoId: number;
  publicacao?: Publicacao;
  tagId: number;
  tag?: Tag;
}

export interface PublicacaoPalavraChave {
  id: number;
  publicacaoId: number;
  publicacao?: Publicacao;
  palavraChaveId: number;
  palavraChave?: PalavraChave;
}

export interface Escrita {
  id: number;
  instituicaoId: number;
  instituicao?: Instituicao;
  academicoId: number;
  academico?: Academico;
  publicacaoId: number;
  publicacao?: Publicacao;
  orientacoes?: Orientacao[];
}

export interface Orientacao {
  id: number;
  academicoId: number;
  academico?: Academico;
  escritaId: number;
  escrita?: Escrita;
}
