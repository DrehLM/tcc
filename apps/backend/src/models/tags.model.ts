import { Nullable, Tag as TagAttributes } from '@tcc/interfaces';
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
import { PublicacaoTag } from './publicacoes-tags.model';
import { Publicacao } from './publicacoes.model';

export class Tag
  extends Model<InferAttributes<Tag>, InferCreationAttributes<Tag>>
  implements TagAttributes
{
  declare id: CreationOptional<number>;
  declare tag: Nullable<string>;

  declare publicacoes?: NonAttribute<Publicacao[]>;
  declare publicacoesTags?: NonAttribute<PublicacaoTag[]>;

  declare static associations: {
    publicacoes: Association<Tag, Publicacao>;
    publicacoesTags: Association<Tag, PublicacaoTag>;
  };

  static associate() {
    Tag.belongsToMany(Publicacao, {
      as: 'publicacoes',
      through: PublicacaoTag,
    });
    Tag.hasMany(PublicacaoTag, {
      as: 'publicacoesTags',
      foreignKey: 'tagId',
    });
  }
}

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');

  Tag.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      tag: {
        type: DataTypes.TEXT,
      },
    },
    {
      modelName: 'tag',
      tableName: 'tags',
      sequelize: sequelizeClient,
    }
  );

  return Tag;
}
