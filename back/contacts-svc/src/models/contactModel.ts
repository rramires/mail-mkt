// imports
import Sequelize, { Model, Optional } from 'sequelize';
//
import database from 'mm-commons/data/db';
import { IContact } from './contact';

// AccountCreationAttributes<IAccount, optional fields>
interface AccountCreationAttributes extends Optional<IContact, "id">{}
// interface with optional attributes
export interface IContactModel extends Model<IContact, AccountCreationAttributes>, IContact{}

// define table fields
export default database.define<IContactModel>('contact', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    accountId: {
        type: Sequelize.INTEGER.UNSIGNED,
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
    phone: {
        type: Sequelize.STRING(16),
        allowNull: true,
    },
    status: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
        defaultValue: 100
    }
});
