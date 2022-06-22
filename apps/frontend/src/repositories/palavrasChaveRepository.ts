import { PalavraChave } from "@tcc/interfaces";
import { makeHttpRepository } from "./makeHttpRepository";

export const palavrasChaveRepository =
  makeHttpRepository<PalavraChave>("palavras-chave");
