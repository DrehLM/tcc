import { PublicacaoPalavraChave } from "@tcc/interfaces";
import { makeHttpRepository } from "./makeHttpRepository";

export const publicacoesPalavrasChaveRepository =
  makeHttpRepository<PublicacaoPalavraChave>("publicacoes-palavras-chave");
