import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import createModel from '../../models/publicacoes.model';
import { Publicacoes } from './publicacoes.class';
import hooks from './publicacoes.hooks';

declare module '../../declarations' {
  interface ServiceTypes {
    publicacoes: Publicacoes & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  app.use('/publicacoes', new Publicacoes(options, app));

  const service = app.service('publicacoes');

  service.hooks(hooks);
}
