// imports
import { Request, Response } from "express";
import { IAccount } from "../models/accountsModel";

/**
 * accounts array
 */
const accounts: IAccount[] = [];

/**
 * Return accounts
 */
function getAccounts(req: Request, res: Response, next: any){
    //
    res.json(accounts);
}


/**
 * Add new account
 */
function addAccounts(req: Request, res: Response, next: any){
    try{
        // cast body to type
        const newAccount = req.body as IAccount;
        // add
        accounts.push(newAccount);
        // 201 Created
        res.status(201).json(newAccount);
    }
    catch(error){
        console.log(error);
        // 400 bad request
        res.status(400).end();
    }
}
//
export default {
    getAccounts,
    addAccounts
}