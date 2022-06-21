import { Publicacao } from "@tcc/interfaces";

export const includePublicacao = (
  publicacoes: Publicacao[],
  publicao: Publicacao
): boolean =>
  publicacoes.some((publicaoItem) => publicaoItem.id === publicao.id);
