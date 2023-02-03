// imports
import Sequelize, { Model, Optional } from 'sequelize';
//
import database from '../db';
import { IAccount } from './account';

// AccountCreationAttributes<IAccount, optional fields>
interface AccountCreationAttributes extends Optional<IAccount, "id">{}
// interface with optional attributes
export interface AccountModel extends Model<IAccount, AccountCreationAttributes>, IAccount{}

// define table fields
export default database.define<AccountModel>('account', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
        defaultValue: 100
    },
    domain: {
        type: Sequelize.STRING,
        allowNull: true
    }
});