import { Academico } from "@tcc/interfaces";
import { makeHttpRepository } from "./makeHttpRepository";

export const academicosRepository = makeHttpRepository<Academico>("academicos");
