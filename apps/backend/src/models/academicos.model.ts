import { Academico as AcademicoAttributes, Nullable } from '@tcc/interfaces';
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from 'sequelize';
import { Application } from '../declarations';

export class Academico
  extends Model<InferAttributes<Academico>, InferCreationAttributes<Academico>>
  implements AcademicoAttributes
{
  declare id: CreationOptional<number>;
  declare nome: Nullable<string>;
  declare titulacao: Nullable<string>;
}

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');

  Academico.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.TEXT,
      },
      titulacao: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: 'academicos',
      sequelize: sequelizeClient,
    }
  );

  return Academico;
}
