import { HooksObject } from '@feathersjs/feathers';
import { Orientacao } from '@tcc/interfaces';
import { hooks } from 'feathers-sequelize';
import includeAssociations from '../../hooks/include-associations';

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
} as HooksObject<Orientacao>;
