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
const accountModel = database.define<AccountModel>('account', {
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


/**
 * Add NEW account
 */
function add(account: IAccount){
    return accountModel.create(account);
}


/**
 * Return All accounts
 */
function findAll(){
    return accountModel.findAll<AccountModel>();
}


/**
 * Return acount filtered by ID
 */
function findById(id: number){
    return accountModel.findByPk<AccountModel>(id);
}


/**
 * Update account
 */
async function set(id: number, account: IAccount){
    const originalAccount = await findById(id);

    if(originalAccount){
        originalAccount.name = account.name;
        originalAccount.status = account.status;
        originalAccount.domain = account.domain;
        //
        if(account.password !== ''){
            originalAccount.password = account.password;
        }
        // save
        await originalAccount.save();
        return originalAccount;
    }
    else{
        throw new Error(`Account not found.`); 
    }
}


export default {
    add,
    findAll,
    findById,
    set
}