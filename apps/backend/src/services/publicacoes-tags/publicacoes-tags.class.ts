import { PublicacaoTag } from '@tcc/interfaces';
import { SequelizeServiceOptions, Service } from 'feathers-sequelize';
import { Application } from '../../declarations';

export class PublicacoesTags extends Service<PublicacaoTag> {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }
}
