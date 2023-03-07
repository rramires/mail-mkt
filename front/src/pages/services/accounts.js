import baseAPI from './api';
import baseURLs from '../../config/baseURLs';
//
class AccountsService{
    //
    constructor(){
        this.api = baseAPI(baseURLs.API_ACCOUNTS);
    }


    /**
     * Create NEW Account
     */
    async signUp(userModel) {
        const result = await this.api.post('accounts', userModel);
        //
        return result;
    }


    /**
     * Authenticate account
     */
    async login(email, password) {
        const result = await this.api.post('accounts/login', { email, password });
        //
        return result;
    }
}
//
export default AccountsService