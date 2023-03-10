import BaseAPI from './BaseAPI';
import baseURLs from '../../config/baseURLs';
//
class ContactsService{
    //
    constructor(){
        this.api = BaseAPI(baseURLs.API_CONTACTS);
    }


    /**
     * Get ALL contacts (filtered by account id)
     */
    async getAllContacts() {
        const result = await this.api.get('contacts');
        //
        return result.data;
    }


    /**
     * Get contact by id (filtered by account id too)
     */
    async getOneContact(contactId) {
        const result = await this.api.get(`contacts/${contactId}`);
        //
        return result.data;
    }


    /**
     * Create NEW Contact
     */
    async addContact(contactModel) {
        const result = await this.api.post('contacts', contactModel);
        //
        return result;
    }


    /**
     * Update contact
     */
    async setContact(contactModel) {
        const result = await this.api.patch('contacts', contactModel);
        //
        return result;
    }
}
//
export default ContactsService