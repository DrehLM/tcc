import { Academico as AcademicoAttributes, Nullable } from '@tcc/interfaces';
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
import { Escrita } from './escritas.model';
import { Orientacao } from './orientacoes.model';

export class Academico
  extends Model<InferAttributes<Academico>, InferCreationAttributes<Academico>>
  implements AcademicoAttributes
{
  declare id: CreationOptional<number>;
  declare nome: Nullable<string>;
  declare titulacao: Nullable<string>;

  declare escritas?: NonAttribute<Escrita[]>;
  declare orientacoes?: NonAttribute<Orientacao[]>;

  declare static associations: {
    escritas: Association<Academico, Escrita>;
    orientacoes: Association<Academico, Orientacao>;
  };

  static associate() {
    Academico.hasMany(Escrita, {
      as: 'escritas',
      foreignKey: 'academicoId',
    });
    Academico.hasMany(Orientacao, {
      as: 'orientacoes',
      foreignKey: 'academicoId',
    });
  }
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
      modelName: 'academico',
      tableName: 'academicos',
      sequelize: sequelizeClient,
    }
  );

  return Academico;
}
