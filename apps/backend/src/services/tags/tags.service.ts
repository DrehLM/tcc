import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import createModel from '../../models/tags.model';
import { Tags } from './tags.class';
import hooks from './tags.hooks';

declare module '../../declarations' {
  interface ServiceTypes {
    tags: Tags & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  app.use('/tags', new Tags(options, app));

  const service = app.service('tags');

  service.hooks(hooks);
}
