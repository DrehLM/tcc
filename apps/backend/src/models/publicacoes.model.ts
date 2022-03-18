import { Nullable, Publicacao as PublicacaoAttributes } from '@tcc/interfaces';
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
import { Trilha } from './trilhas.model';

export class Publicacao
  extends Model<
    InferAttributes<Publicacao>,
    InferCreationAttributes<Publicacao>
  >
  implements PublicacaoAttributes
{
  declare id: CreationOptional<number>;
  declare titulo: Nullable<string>;
  declare edicaoId: Nullable<number>;
  declare trilhaId: Nullable<number>;

  declare edicao?: NonAttribute<Edicao>;
  declare trilha?: NonAttribute<Trilha>;

  declare static associations: {
    edicao: Association<Publicacao, Edicao>;
    trilha: Association<Publicacao, Trilha>;
  };

  static associate() {
    Publicacao.belongsTo(Edicao, {
      as: 'edicao',
    });
    Publicacao.belongsTo(Trilha, {
      as: 'trilha',
    });
  }
}

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');

  Publicacao.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      titulo: {
        type: DataTypes.TEXT,
      },
      edicaoId: {
        type: DataTypes.INTEGER,
        field: 'edicao_id',
      },
      trilhaId: {
        type: DataTypes.INTEGER,
        field: 'trilha_id',
      },
    },
    {
      tableName: 'publicacoes',
      sequelize: sequelizeClient,
    }
  );

  return Publicacao;
}
