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
import { PublicacaoTag } from './publicacoes-tags.model';
import { Tag } from './tags.model';
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
  declare tags?: NonAttribute<Tag[]>;
  declare publicacoesTags?: NonAttribute<PublicacaoTag[]>;

  declare static associations: {
    edicao: Association<Publicacao, Edicao>;
    trilha: Association<Publicacao, Trilha>;
    tags: Association<Publicacao, Tag>;
    publicacoesTags: Association<Publicacao, PublicacaoTag>;
  };

  static associate() {
    Publicacao.belongsTo(Edicao, {
      as: 'edicao',
    });
    Publicacao.belongsTo(Trilha, {
      as: 'trilha',
    });
    Publicacao.belongsToMany(Tag, {
      as: 'tags',
      through: PublicacaoTag,
    });
    Publicacao.hasMany(PublicacaoTag, {
      as: 'publicacoesTags',
      foreignKey: 'publicacaoId',
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
      modelName: 'publicacao',
      tableName: 'publicacoes',
      sequelize: sequelizeClient,
    }
  );

  return Publicacao;
}
