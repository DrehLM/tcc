import { Hook } from '@feathersjs/feathers';

export default function includeAssociations(): Hook {
  return function (context) {
    context.params.sequelize = {
      raw: false,
      include: {
        all: true,
      },
    };
  };
}
