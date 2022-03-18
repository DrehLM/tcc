import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import createModel from '../../models/trilhas.model';
import { Trilhas } from './trilhas.class';
import hooks from './trilhas.hooks';

declare module '../../declarations' {
  interface ServiceTypes {
    trilhas: Trilhas & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  app.use('/trilhas', new Trilhas(options, app));

  const service = app.service('trilhas');

  service.hooks(hooks);
}
