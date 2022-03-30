import { Publicacao } from "../../../../libs/interfaces/src";

export const includePublicacao = (
  publicacoes: Publicacao[],
  publicao: Publicacao
): boolean =>
  publicacoes.some((publicaoItem) => publicaoItem.id === publicao.id);
