import { Orientacao } from "@tcc/interfaces";
import { makeHttpRepository } from "./makeHttpRepository";

export const orientacoesRepository =
  makeHttpRepository<Orientacao>("orientacoes");
