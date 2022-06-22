import { Evento } from "@tcc/interfaces";
import { makeHttpRepository } from "./makeHttpRepository";

const EventosRepository = makeHttpRepository<Evento>("eventos");

export const eventosRepository = new EventosRepository();
