// imports
import { DestroyOptions } from 'sequelize';
import { IContact } from './contact';
import contactModel, { IContactModel } from './contactModel';


/**
 * Return contacts by accountId
 */
function findByAccountId(accountId: number){
    return contactModel.findAll<IContactModel>({ where: { accountId } });
}


/**
 * Return contacts by accountId
 */
function findById(id: number, accountId: number){
    return contactModel.findOne<IContactModel>({ where: { id, accountId } });
}


/**
 * Add NEW contact
 */
async function add(contact: IContact, accountId: number){
    // set verified accountId
    contact.accountId = accountId;
    // insert
    const result = await contactModel.create(contact);
    // set id
    contact.id = result.id;
    return contact;
}


/**
 * Remove contact
 */
async function remove(id: number, accountId: number){
    // 
    contactModel.destroy({ where: { id, accountId } } as DestroyOptions<IContact>);
}
//
export default {
    add,
    remove,
    findById,
    findByAccountId,
}