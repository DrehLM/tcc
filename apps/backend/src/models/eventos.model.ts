import { Evento as EventoAttributes } from '@tcc/interfaces';
import {
  Association,
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
  Sequelize,
} from 'sequelize';
import { Application } from '../declarations';
import { Edicao } from './edicoes.model';

export class Evento
  extends Model<InferAttributes<Evento>, InferCreationAttributes<Evento>>
  implements EventoAttributes
{
  declare id: CreationOptional<number>;
  declare nome: string;

  declare edicoes?: NonAttribute<Edicao[]>;

  declare static associations: {
    edicoes: Association<Evento, Edicao>;
  };

  static associate() {
    Evento.hasMany(Edicao, {
      as: 'edicoes',
      foreignKey: 'eventoId',
    });
  }
}

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');

  Evento.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: 'eventos',
      sequelize: sequelizeClient,
    }
  );

  return Evento;
}
