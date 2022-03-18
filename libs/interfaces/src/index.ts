export type Nullable<T> = T | null;

export interface Instituicao {
  id: number;
  nome: Nullable<string>;
  sigla: Nullable<string>;
  cidade: Nullable<string>;
  estado: Nullable<string>;
  edicoes?: Edicao[];
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
}

export interface Tag {
  id: number;
  tag: Nullable<string>;
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
}
