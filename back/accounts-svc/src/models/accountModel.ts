// imports
import Sequelize, { Model, Optional } from 'sequelize';
//
import database from '../db';
import { IAccount } from './account';

// AccountCreationAttributes<IAccount, optional fields>
interface AccountCreationAttributes extends Optional<IAccount, "id">{}
// interface with optional attributes
export interface IAccountModel extends Model<IAccount, AccountCreationAttributes>, IAccount{}

// define table fields
export default database.define<IAccountModel>('account', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(160),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(160),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(60),
        allowNull: false
    },
    status: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
        defaultValue: 100
    },
    domain: {
        type: Sequelize.STRING(120),
        allowNull: true
    }
});
