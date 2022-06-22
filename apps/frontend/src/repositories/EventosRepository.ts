import { Evento, WithoutId } from "@tcc/interfaces";
import { apiRest } from "../services/api";
import { BaseRepository } from "./BaseRepository";
import { Paginated } from "./interfaces";

export class EventosRepository extends BaseRepository<Evento> {
  async create(data: WithoutId<Evento>) {
    const response = await apiRest.post<Evento>("/eventos", data);
    return response.status === 201;
  }

  async update(id: number, data: Partial<Evento>) {
    const response = await apiRest.patch<Evento>(`/eventos/${id}`, data);
    return response.status === 200;
  }

  async delete(id: number) {
    const response = await apiRest.delete<Evento>(`/eventos/${id}`);
    return response.status === 200;
  }

  async find(item?: Partial<Evento>) {
    const response = await apiRest.get<Evento[] | Paginated<Evento>>(
      "/eventos",
      {
        params: item,
      }
    );
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      return response.data.data;
    }
  }

  async findOne(id: number) {
    const response = await apiRest.get<Evento | null>(`/eventos/${id}`);
    return response.data;
  }
}

export const eventosRepository = new EventosRepository();
