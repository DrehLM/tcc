import { Edicao as EdicaoAttributes, Nullable } from '@tcc/interfaces';
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
import { Evento } from './eventos.model';
import { Instituicao } from './instituicoes.model';
import { Trilha } from './trilhas.model';

export class Edicao
  extends Model<InferAttributes<Edicao>, InferCreationAttributes<Edicao>>
  implements EdicaoAttributes
{
  declare id: CreationOptional<number>;
  declare edicao: Nullable<string>;
  declare ano: Nullable<number>;
  declare instituicaoId: Nullable<number>;
  declare eventoId: Nullable<number>;

  declare instituicao?: NonAttribute<Instituicao>;
  declare evento?: NonAttribute<Evento>;
  declare trilhas?: NonAttribute<Trilha[]>;

  declare static associations: {
    instituicao: Association<Edicao, Instituicao>;
    evento: Association<Edicao, Evento>;
    trilhas: Association<Edicao, Trilha>;
  };

  static associate() {
    Edicao.belongsTo(Instituicao, {
      as: 'instituicao',
    });
    Edicao.belongsTo(Evento, {
      as: 'evento',
    });
    Edicao.hasMany(Trilha, {
      as: 'trilhas',
      foreignKey: 'edicaoId',
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
      eventoId: {
        type: DataTypes.INTEGER,
        field: 'evento_id',
      },
    },
    {
      tableName: 'edicoes',
      sequelize: sequelizeClient,
    }
  );

  return Edicao;
}
