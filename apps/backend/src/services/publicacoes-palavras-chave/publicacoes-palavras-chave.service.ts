// Initializes the `publicacoes-palavras-chave` service on path `/publicacoes-palavras-chave`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { PublicacoesPalavrasChave } from './publicacoes-palavras-chave.class';
import createModel from '../../models/publicacoes-palavras-chave.model';
import hooks from './publicacoes-palavras-chave.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'publicacoes-palavras-chave': PublicacoesPalavrasChave & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/publicacoes-palavras-chave', new PublicacoesPalavrasChave(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('publicacoes-palavras-chave');

  service.hooks(hooks);
}
