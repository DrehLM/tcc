import { Publicacao } from "@tcc/interfaces";
import { makeHttpRepository } from "./makeHttpRepository";

export const publicacoesRepository = makeHttpRepository<Publicacao>("publicacoes");
