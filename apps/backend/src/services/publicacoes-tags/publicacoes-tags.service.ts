import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import createModel from '../../models/publicacoes-tags.model';
import { PublicacoesTags } from './publicacoes-tags.class';
import hooks from './publicacoes-tags.hooks';

declare module '../../declarations' {
  interface ServiceTypes {
    'publicacoes-tags': PublicacoesTags & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  app.use('/publicacoes-tags', new PublicacoesTags(options, app));

  const service = app.service('publicacoes-tags');

  service.hooks(hooks);
}
