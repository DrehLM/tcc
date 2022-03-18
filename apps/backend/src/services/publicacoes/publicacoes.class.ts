import { Publicacao } from '@tcc/interfaces';
import { SequelizeServiceOptions, Service } from 'feathers-sequelize';
import { Application } from '../../declarations';

export class Publicacoes extends Service<Publicacao> {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }
}
