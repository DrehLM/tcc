import { HooksObject } from '@feathersjs/feathers';
import { Publicacao } from '@tcc/interfaces';
import { hooks } from 'feathers-sequelize';
import includeAssociations from '../../hooks/include-associations';

export default {
  before: {
    all: [],
    find: [includeAssociations()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [hooks.dehydrate()],
    get: [],
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
} as HooksObject<Publicacao>;
