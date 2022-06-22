import { Paginated } from "../interfaces";

interface Response {
  status: number;
}

export function isOk(response: Response) {
  return response.status === 200;
}

export function isCreated(response: Response) {
  return response.status === 201;
}

export function extractFromArrayOrPaginated<T>(data: T[] | Paginated<T>): T[] {
  return Array.isArray(data) ? data : data.data;
}
