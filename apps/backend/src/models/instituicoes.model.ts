import {
  Instituicao as InstituicaoAttributes,
  Nullable,
} from '@tcc/interfaces';
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

export class Instituicao
  extends Model<
    InferAttributes<Instituicao>,
    InferCreationAttributes<Instituicao>
  >
  implements InstituicaoAttributes
{
  declare id: CreationOptional<number>;
  declare nome: Nullable<string>;
  declare sigla: Nullable<string>;
  declare cidade: Nullable<string>;
  declare estado: Nullable<string>;

  declare edicoes?: NonAttribute<Edicao[]>;

  declare static associations: {
    edicoes: Association<Instituicao, Edicao>;
  };

  static associate() {
    Instituicao.hasMany(Edicao, {
      as: 'edicoes',
      foreignKey: 'instituicaoId',
    });
  }
}

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');

  Instituicao.init(
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
      sigla: {
        type: DataTypes.TEXT,
      },
      cidade: {
        type: DataTypes.TEXT,
      },
      estado: {
        type: DataTypes.TEXT,
      },
    },
    {
      modelName: 'instituicao',
      tableName: 'instituicoes',
      sequelize: sequelizeClient,
    }
  );

  return Instituicao;
}
