import { PublicacaoTag } from "@tcc/interfaces";
import { makeHttpRepository } from "./makeHttpRepository";

export const publicacoesTagsRepository =
  makeHttpRepository<PublicacaoTag>("publicacoes-tags");
