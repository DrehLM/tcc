import { Instituicao } from "@tcc/interfaces";
import { makeHttpRepository } from "./makeHttpRepository";

export const instituicoesRepository =
  makeHttpRepository<Instituicao>("instituicoes");
