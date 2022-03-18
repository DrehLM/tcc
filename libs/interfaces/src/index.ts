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
}

export interface Evento {
  id: number;
  nome: string;
  edicoes?: Edicao[];
}
