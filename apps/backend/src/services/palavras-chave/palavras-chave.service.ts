import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import createModel from '../../models/palavras-chave.model';
import { PalavrasChave } from './palavras-chave.class';
import hooks from './palavras-chave.hooks';

declare module '../../declarations' {
  interface ServiceTypes {
    'palavras-chave': PalavrasChave & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  app.use('/palavras-chave', new PalavrasChave(options, app));

  const service = app.service('palavras-chave');

  service.hooks(hooks);
}
