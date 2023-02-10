import { Request, Response } from "express";
import { Token } from '../auth';


/**
 * Get authorization token from Response
 */
function getToken(res: Response){
    // get from locals
    const payload = res.locals.payload as Token;
    // validate
    if(!payload || !payload.accountId){
        // 401 Unauthorized
        return res.status(401).end();
    }
    else{
        return payload;
    }
}
//
export default {
    getToken
}