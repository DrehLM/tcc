import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import createModel from '../../models/edicoes.model';
import { Edicoes } from './edicoes.class';
import hooks from './edicoes.hooks';

declare module '../../declarations' {
  interface ServiceTypes {
    edicoes: Edicoes & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  app.use('/edicoes', new Edicoes(options, app));

  const service = app.service('edicoes');

  service.hooks(hooks);
}
