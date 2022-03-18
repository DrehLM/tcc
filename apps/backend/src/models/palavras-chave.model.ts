import {
  Nullable,
  PalavraChave as PalavraChaveAttributes,
} from '@tcc/interfaces';
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from 'sequelize';
import { Application } from '../declarations';

export class PalavraChave
  extends Model<
    InferAttributes<PalavraChave>,
    InferCreationAttributes<PalavraChave>
  >
  implements PalavraChaveAttributes
{
  declare id: CreationOptional<number>;
  declare palavraChave: Nullable<string>;
}

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');

  PalavraChave.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      palavraChave: {
        type: DataTypes.TEXT,
        field: 'palavra_chave',
      },
    },
    {
      modelName: 'palavraChave',
      tableName: 'palavras_chave',
      sequelize: sequelizeClient,
    }
  );

  return PalavraChave;
}
