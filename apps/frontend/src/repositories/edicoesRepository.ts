import { Edicao } from "@tcc/interfaces";
import { makeHttpRepository } from "./makeHttpRepository";

export const edicoesRepository = makeHttpRepository<Edicao>("edicoes");
