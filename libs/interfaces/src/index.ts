export interface Instituicao {
  id: number;
  nome: string;
  sigla: string;
  cidade: string;
  estado: string;
  edicoes?: Edicao[];
}

export interface Edicao {
  id: number;
  edicao: string;
  ano: number;
  instituicaoId: number;
  instituicao?: Instituicao;
  eventoId: number;
  evento?: Evento;
  trilhas?: Trilha[];
}

export interface Evento {
  id: number;
  nome: string;
  edicoes?: Edicao[];
}

export interface Trilha {
  id: number;
  nome: string;
  edicaoId: number;
  edicao?: Edicao;
}

export interface Academico {
  id: number;
  nome: string;
  titulacao: string;
}
