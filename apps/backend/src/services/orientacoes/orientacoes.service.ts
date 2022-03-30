// Initializes the `orientacoes` service on path `/orientacoes`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Orientacoes } from './orientacoes.class';
import createModel from '../../models/orientacoes.model';
import hooks from './orientacoes.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'orientacoes': Orientacoes & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/orientacoes', new Orientacoes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('orientacoes');

  service.hooks(hooks);
}
