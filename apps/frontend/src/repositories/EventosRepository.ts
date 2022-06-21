import { Evento } from "@tcc/interfaces";
import { apiRest } from "../services/api";
import { BaseRepository } from "./BaseRepository";
import { Paginated } from "./interfaces";

export class EventosRepository extends BaseRepository<Evento> {
  async find() {
    const response = await apiRest.get<Paginated<Evento>>("/eventos");
    return response.data?.data ?? [];
  }
}

export const eventosRepository = new EventosRepository();
