import { IRead, IWrite } from "./interfaces";

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  async create(item: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async update(id: number, item: Partial<T>): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async find(item: Partial<T>): Promise<T[]> {
    throw new Error("Method not implemented.");
  }

  async findOne(id: number): Promise<T | null> {
    throw new Error("Method not implemented.");
  }
}
