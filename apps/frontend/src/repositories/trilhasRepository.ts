import { Trilha } from "@tcc/interfaces";
import { makeHttpRepository } from "./makeHttpRepository";

export const trilhasRepository = makeHttpRepository<Trilha>("trilhas");
