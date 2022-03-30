// Initializes the `escritas` service on path `/escritas`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Escritas } from './escritas.class';
import createModel from '../../models/escritas.model';
import hooks from './escritas.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'escritas': Escritas & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/escritas', new Escritas(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('escritas');

  service.hooks(hooks);
}
