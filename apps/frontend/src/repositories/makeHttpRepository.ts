import { WithoutId } from "@tcc/interfaces";
import { apiRest } from "../services/api";
import { BaseRepository } from "./BaseRepository";
import { Paginated } from "./interfaces";
import {
  extractFromArrayOrPaginated,
  isCreated,
  isOk,
} from "./utils/responses";

export function makeHttpRepository<T>(path: string) {
  return class Repository extends BaseRepository<T> {
    async create(data: WithoutId<T>) {
      const response = await apiRest.post<T>(`/${path}`, data);
      return isCreated(response);
    }

    async update(id: number, data: Partial<T>) {
      const response = await apiRest.patch<T>(`/${path}/${id}`, data);
      return isOk(response);
    }

    async delete(id: number) {
      const response = await apiRest.delete<T>(`/${path}/${id}`);
      return isOk(response);
    }

    async find(item?: Partial<T>) {
      const response = await apiRest.get<T[] | Paginated<T>>(`/${path}`, {
        params: item,
      });
      return extractFromArrayOrPaginated(response.data);
    }

    async findOne(id: number) {
      const response = await apiRest.get<T | null>(`/${path}/${id}`);
      return response.data;
    }
  };
}
