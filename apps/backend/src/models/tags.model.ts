import { Nullable, Tag as TagAttributes } from '@tcc/interfaces';
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from 'sequelize';
import { Application } from '../declarations';

export class Tag
  extends Model<InferAttributes<Tag>, InferCreationAttributes<Tag>>
  implements TagAttributes
{
  declare id: CreationOptional<number>;
  declare tag: Nullable<string>;
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
      tableName: 'tags',
      sequelize: sequelizeClient,
    }
  );

  return Tag;
}
