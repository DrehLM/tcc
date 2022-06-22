export interface IWrite<T> {
  create(item: T): Promise<boolean>;
  update(id: number, item: T): Promise<boolean>;
  delete(id: number): Promise<boolean>;
}

export interface IRead<T> {
  find(item: Partial<T>): Promise<T[]>;
  findOne(id: number): Promise<T | null>;
}

export interface Paginated<T> {
  data: T[];
  total: number;
  $skip: number;
  $limit: number;
}
