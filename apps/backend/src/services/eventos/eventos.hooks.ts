import { Hook, HooksObject } from '@feathersjs/feathers';
import { Evento } from '@tcc/interfaces';
import { hooks } from 'feathers-sequelize';

function includeAssociations(): Hook {
  return (context) => {
    context.params.sequelize = {
      ...(context.params.sequelize ?? {}),
      raw: false,
      include: [
        ...(context.params.sequelize?.include ?? []),
        {
          association: 'edicoes',
          include: [
            {
              association: 'publicacoes',
            },
          ],
        },
      ],
    };
  };
}

export default {
  before: {
    all: [],
    find: [includeAssociations()],
    get: [includeAssociations()],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [hooks.dehydrate()],
    get: [hooks.dehydrate()],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
} as HooksObject<Evento>;
