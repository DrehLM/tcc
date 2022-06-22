import { Evento } from "@tcc/interfaces";
import { makeHttpRepository } from "./makeHttpRepository";

export const eventosRepository = makeHttpRepository<Evento>("eventos");
