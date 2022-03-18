// Initializes the `instituicoes` service on path `/instituicoes`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Instituicoes } from './instituicoes.class';
import createModel from '../../models/instituicoes.model';
import hooks from './instituicoes.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'instituicoes': Instituicoes & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/instituicoes', new Instituicoes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('instituicoes');

  service.hooks(hooks);
}
