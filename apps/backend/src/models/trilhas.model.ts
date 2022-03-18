import { Nullable, Trilha as TrilhaAttributes } from '@tcc/interfaces';
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
import { Publicacao } from './publicacoes.model';

export class Trilha
  extends Model<InferAttributes<Trilha>, InferCreationAttributes<Trilha>>
  implements TrilhaAttributes
{
  declare id: CreationOptional<number>;
  declare nome: Nullable<string>;
  declare edicaoId: Nullable<number>;

  declare edicao?: NonAttribute<Edicao>;
  declare publicacoes?: NonAttribute<Publicacao[]>;

  declare static associations: {
    edicoes: Association<Trilha, Edicao>;
    publicacoes: Association<Trilha, Publicacao>;
  };

  static associate() {
    Trilha.belongsTo(Edicao, {
      as: 'edicao',
    });
    Trilha.hasMany(Publicacao, {
      as: 'publicacoes',
      foreignKey: 'trilhaId',
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
      modelName: 'trilha',
      tableName: 'trilhas',
      sequelize: sequelizeClient,
    }
  );

  return Trilha;
}
