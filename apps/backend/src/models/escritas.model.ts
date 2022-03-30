import { Escrita as EscritaAttributes } from '@tcc/interfaces';
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
import { Instituicao } from './instituicoes.model';
import { Orientacao } from './orientacoes.model';
import { Publicacao } from './publicacoes.model';

export class Escrita
  extends Model<InferAttributes<Escrita>, InferCreationAttributes<Escrita>>
  implements EscritaAttributes
{
  declare id: CreationOptional<number>;
  declare instituicaoId: number;
  declare academicoId: number;
  declare publicacaoId: number;

  declare instituicao?: NonAttribute<Instituicao>;
  declare academico?: NonAttribute<Academico>;
  declare publicacao?: NonAttribute<Publicacao>;
  declare orientacoes?: NonAttribute<Orientacao[]>;

  declare static associations: {
    instituicao: Association<Escrita, Instituicao>;
    academico: Association<Escrita, Academico>;
    publicacao: Association<Escrita, Publicacao>;
    orientacoes: Association<Escrita, Orientacao>;
  };

  static associate() {
    Escrita.belongsTo(Instituicao, {
      as: 'instituicao',
    });
    Escrita.belongsTo(Academico, {
      as: 'academico',
    });
    Escrita.belongsTo(Publicacao, {
      as: 'publicacao',
    });
    Escrita.hasMany(Orientacao, {
      as: 'orientacoes',
      foreignKey: 'escritaId',
    });
  }
}

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');

  Escrita.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      instituicaoId: {
        type: DataTypes.INTEGER,
        field: 'instituicao_id',
        allowNull: false,
      },
      academicoId: {
        type: DataTypes.INTEGER,
        field: 'academico_id',
        allowNull: false,
      },
      publicacaoId: {
        type: DataTypes.INTEGER,
        field: 'publicacao_id',
        allowNull: false,
      },
    },
    {
      modelName: 'escrita',
      tableName: 'escritas',
      sequelize: sequelizeClient,
    }
  );

  return Escrita;
}
