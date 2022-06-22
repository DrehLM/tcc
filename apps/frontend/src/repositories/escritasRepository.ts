import { Escrita } from "@tcc/interfaces";
import { makeHttpRepository } from "./makeHttpRepository";

export const escritasRepository = makeHttpRepository<Escrita>("escritas");
