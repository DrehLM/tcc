import {
  Nullable,
  PublicacaoTag as PublicacaoTagAttributes,
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
import { Publicacao } from './publicacoes.model';
import { Tag } from './tags.model';

export class PublicacaoTag
  extends Model<
    InferAttributes<PublicacaoTag>,
    InferCreationAttributes<PublicacaoTag>
  >
  implements PublicacaoTagAttributes
{
  declare id: CreationOptional<number>;
  declare publicacaoId: Nullable<number>;
  declare tagId: Nullable<number>;

  declare publicacao?: NonAttribute<Publicacao>;
  declare tag?: NonAttribute<Tag>;

  declare static associations: {
    publicacao: Association<PublicacaoTag, Publicacao>;
    tag: Association<PublicacaoTag, Tag>;
  };

  static associate() {
    PublicacaoTag.belongsTo(Publicacao, {
      as: 'publicacao',
      foreignKey: 'publicacaoId',
    });
    PublicacaoTag.belongsTo(Tag, {
      as: 'tag',
      foreignKey: 'tagId',
    });
  }
}

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');

  PublicacaoTag.init(
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
      tagId: {
        type: DataTypes.INTEGER,
        field: 'tag_id',
      },
    },
    {
      modelName: 'publicacaoTag',
      tableName: 'publicacoes_tags',
      sequelize: sequelizeClient,
    }
  );

  return PublicacaoTag;
}
