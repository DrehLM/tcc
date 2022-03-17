import { Instituicao as InstituicaoAttributes } from '@tcc/interfaces';
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from 'sequelize';
import { Application } from '../declarations';

class Instituicao
  extends Model<
    InferAttributes<Instituicao>,
    InferCreationAttributes<Instituicao>
  >
  implements InstituicaoAttributes
{
  declare id: CreationOptional<number>;
  declare nome: string;
  declare sigla: string;
  declare cidade: string;
  declare estado: string;
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
      tableName: 'instituicoes',
      sequelize: sequelizeClient,
    }
  );

  return Instituicao;
}
