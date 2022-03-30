import { Orientacao as OrientacaoAttributes } from '@tcc/interfaces';
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
import { Academico } from './academicos.model';
import { Escrita } from './escritas.model';

export class Orientacao
  extends Model<
    InferAttributes<Orientacao>,
    InferCreationAttributes<Orientacao>
  >
  implements OrientacaoAttributes
{
  declare id: CreationOptional<number>;
  declare academicoId: number;
  declare escritaId: number;

  declare academico?: NonAttribute<Academico>;
  declare escrita?: NonAttribute<Escrita>;

  declare static associations: {
    academico: Association<Orientacao, Academico>;
    escrita: Association<Orientacao, Escrita>;
  };

  static associate() {
    Orientacao.belongsTo(Academico, {
      as: 'academico',
      foreignKey: 'academicoId',
    });
    Orientacao.belongsTo(Escrita, {
      as: 'escrita',
      foreignKey: 'escritaId',
    });
  }
}

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');

  Orientacao.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      academicoId: {
        type: DataTypes.INTEGER,
        field: 'academico_id',
        allowNull: false,
      },
      escritaId: {
        type: DataTypes.INTEGER,
        field: 'escrita_id',
        allowNull: false,
      },
    },
    {
      modelName: 'orientacao',
      tableName: 'orientacoes',
      sequelize: sequelizeClient,
    }
  );

  return Orientacao;
}
