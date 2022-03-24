import { PublicacaoPalavraChave as PublicacaoPalavraChaveAttributes } from '@tcc/interfaces';
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
import { PalavraChave } from './palavras-chave.model';
import { Publicacao } from './publicacoes.model';

export class PublicacaoPalavraChave
  extends Model<
    InferAttributes<PublicacaoPalavraChave>,
    InferCreationAttributes<PublicacaoPalavraChave>
  >
  implements PublicacaoPalavraChaveAttributes
{
  declare id: CreationOptional<number>;
  declare publicacaoId: number;
  declare palavraChaveId: number;

  declare publicacao?: NonAttribute<Publicacao>;
  declare palavraChave?: NonAttribute<PalavraChave>;

  declare static associations: {
    publicacao: Association<PublicacaoPalavraChave, Publicacao>;
    palavraChave: Association<PublicacaoPalavraChave, PalavraChave>;
  };

  static associate() {
    PublicacaoPalavraChave.belongsTo(Publicacao, {
      as: 'publicacao',
      foreignKey: 'publicacaoId',
    });
    PublicacaoPalavraChave.belongsTo(PalavraChave, {
      as: 'palavraChave',
      foreignKey: 'palavraChaveId',
    });
  }
}

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');

  PublicacaoPalavraChave.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      publicacaoId: {
        type: DataTypes.INTEGER,
        field: 'publicacao_id',
      },
      palavraChaveId: {
        type: DataTypes.INTEGER,
        field: 'palavra_chave_id',
      },
    },
    {
      modelName: 'publicacaoPalavraChave',
      tableName: 'publicacoes_palavras_chave',
      sequelize: sequelizeClient,
    }
  );

  return PublicacaoPalavraChave;
}
