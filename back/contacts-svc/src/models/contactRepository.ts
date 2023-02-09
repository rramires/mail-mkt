// imports
import { IContact } from './contact';
import contactModel, { IContactModel } from './contactModel';


/**
 * Return contacts by accountId
 */
function findByAccountId(accountId: number){
    return contactModel.findAll<IContactModel>({ where: { accountId } });
}
//
export default {
    findByAccountId,
}