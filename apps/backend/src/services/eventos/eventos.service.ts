import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import createModel from '../../models/eventos.model';
import { Eventos } from './eventos.class';
import hooks from './eventos.hooks';

declare module '../../declarations' {
  interface ServiceTypes {
    eventos: Eventos & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  app.use('/eventos', new Eventos(options, app));

  const service = app.service('eventos');

  service.hooks(hooks);
}
