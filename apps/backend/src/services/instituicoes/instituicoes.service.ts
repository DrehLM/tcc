import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import createModel from '../../models/instituicoes.model';
import { Instituicoes } from './instituicoes.class';
import hooks from './instituicoes.hooks';

declare module '../../declarations' {
  interface ServiceTypes {
    instituicoes: Instituicoes & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  app.use('/instituicoes', new Instituicoes(options, app));

  const service = app.service('instituicoes');

  service.hooks(hooks);
}
