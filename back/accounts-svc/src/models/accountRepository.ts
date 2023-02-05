// imports
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
    findAll,
    findById,
    findByEmail
}