// imports
import { DestroyOptions } from 'sequelize';
import { IAccount } from './account';
import accountModel, { IAccountModel } from './accountModel'

/**
 * Add NEW account
 */
function add(account: IAccount){
    return accountModel.create(account);
}


/**
 * Update account
 */
async function set(id: number, account: IAccount){
    const originalAccount = await findById(id);

    if(originalAccount){
        if(account.name !== ''){
            originalAccount.name = account.name;
        }
        if(account.status){
            originalAccount.status = account.status;
        }
        if(account.domain !== ''){
            originalAccount.domain = account.domain;
        }
        if(account.password !== ''){
            originalAccount.password = account.password;
        }
        // save
        await originalAccount.save();
        return originalAccount;
    }
    else{
        return null;
    }
}


/**
 * Remove account
 */
function remove(id: number){
    return accountModel.destroy({ where: { id } } as DestroyOptions<IAccount>);
}


/**
 * Return All accounts
 */
function findAll(){
    return accountModel.findAll<IAccountModel>();
}


/**
 * Return acount filtered by ID
 */
function findById(id: number){
    return accountModel.findByPk<IAccountModel>(id);
}


/**
 * Return acount filtered by Email
 */
function findByEmail(email: string){
    return accountModel.findOne<IAccountModel>({ where: { email } });
}
//
export default {
    add,
    set,
    remove,
    findAll,
    findById,
    findByEmail
}