import { Tag } from "@tcc/interfaces";
import { makeHttpRepository } from "./makeHttpRepository";

export const tagsRepository = makeHttpRepository<Tag>("tags");
