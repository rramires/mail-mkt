// imports
import { Request, Response } from "express";
//
import { Token } from "mm-commons/api/auth";
import controllerCommons from 'mm-commons/api/controllers/controller'
import repository from '../models/contactRepository';


/**
 * Return contacts by account ID
 */
async function getContactsByAccountId(req: Request, res: Response, next: any){
    // get auth token from res.locals 
    const token = controllerCommons.getToken(res) as Token;
    // get contacts by account ID
    const contacts = await repository.findByAccountId(token.accountId);
    // 200 + json
    res.json(contacts);
}
//
export default {
    getContactsByAccountId
}