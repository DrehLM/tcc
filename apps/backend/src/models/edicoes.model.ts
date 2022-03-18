import { Edicao as EdicaoAttributes } from '@tcc/interfaces';
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
import { Instituicao } from './instituicoes.model';

export class Edicao
  extends Model<InferAttributes<Edicao>, InferCreationAttributes<Edicao>>
  implements EdicaoAttributes
{
  declare id: CreationOptional<number>;
  declare edicao: string;
  declare ano: number;
  declare instituicaoId: number;

  declare instituicao?: NonAttribute<Instituicao>;

  declare static associations: {
    instituicao: Association<Edicao, Instituicao>;
  };

  static associate() {
    Edicao.belongsTo(Instituicao, {
      as: 'instituicao',
    });
  }
}

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');

  Edicao.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      edicao: {
        type: DataTypes.TEXT,
      },
      ano: {
        type: DataTypes.INTEGER,
      },
      instituicaoId: {
        type: DataTypes.INTEGER,
        field: 'instituicao_id',
      },
    },
    {
      tableName: 'edicoes',
      sequelize: sequelizeClient,
    }
  );

  return Edicao;
}
