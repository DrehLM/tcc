import { Trilha as TrilhaAttributes } from '@tcc/interfaces';
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

export class Trilha
  extends Model<InferAttributes<Trilha>, InferCreationAttributes<Trilha>>
  implements TrilhaAttributes
{
  declare id: CreationOptional<number>;
  declare nome: string;
  declare edicaoId: number;

  declare edicao?: NonAttribute<Edicao>;

  declare static associations: {
    edicoes: Association<Trilha, Edicao>;
  };

  static associate() {
    Trilha.belongsTo(Edicao, {
      as: 'edicao',
    });
  }
}

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');

  Trilha.init(
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.TEXT,
      },
      edicaoId: {
        type: DataTypes.INTEGER,
        field: 'edicao_id',
      },
    },
    {
      tableName: 'trilhas',
      sequelize: sequelizeClient,
    }
  );

  return Trilha;
}
