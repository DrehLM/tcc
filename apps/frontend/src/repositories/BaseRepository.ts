import { IRead, IWrite } from "./interfaces";

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  async create(item: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async update(id: string, item: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async find(): Promise<T[]> {
    throw new Error("Method not implemented.");
  }

  async findOne(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
