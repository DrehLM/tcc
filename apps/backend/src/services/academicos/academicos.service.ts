import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import createModel from '../../models/academicos.model';
import { Academicos } from './academicos.class';
import hooks from './academicos.hooks';

declare module '../../declarations' {
  interface ServiceTypes {
    academicos: Academicos & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  app.use('/academicos', new Academicos(options, app));

  const service = app.service('academicos');

  service.hooks(hooks);
}
