// imports
import { Request, Response } from "express";
import { IAccount } from "../models/accountsModel";

/**
 * accounts array
 */
const accounts: IAccount[] = [];

/**
 * Return All accounts
 */
function getAllAccounts(req: Request, res: Response, next: any){
    // 200 OK + json
    res.json(accounts);
}


/**
 * Return account filtered by ID
 */
function getAccountById(req: Request, res: Response, next: any){
    try{
        // get id
        const id = parseInt(req.params.id);
        if(!id){
            throw new Error('ID is invalid format.');
        }
        // get index
        const index = accounts.findIndex(item => item.id === id);
        if(index === -1){
            // 404 Not Found
            res.status(404).end();
        }
        else{
            // 200 OK + json
            res.json(accounts[0]);
        }
    }
    catch(error){
        // 400 bad request
        res.status(400).end();
    }
}


/**
 * Add new account
 */
function addAccount(req: Request, res: Response, next: any){
    try{
        // cast body to type
        const newAccount = req.body as IAccount;
        // add
        accounts.push(newAccount);
        // 201 Created
        res.status(201).json(newAccount);
    }
    catch(error){
        // 400 bad request
        res.status(400).end();
    }
}


/**
 * Update account
 */
function setAccount(req: Request, res: Response, next: any){
    try{
        // get id
        const id = parseInt(req.params.id);
        if(!id){
            throw new Error('ID is invalid format.');
        }
        // cast body to type
        const accountParams = req.body as IAccount;
        // get index
        const index = accounts.findIndex(item => item.id === id);
        if(index === -1){
            // 404 Not Found
            res.status(404).end();
        }
        else{
            // get register
            const originalAccount = accounts[index] as IAccount;
            // update if necessary
            if(accountParams.name){
                originalAccount.name = accountParams.name;
            }
            if(accountParams.email){
                originalAccount.email = accountParams.email;
            }
            if(accountParams.password){
                originalAccount.password = accountParams.password;
            }
            if(accountParams.status){
                originalAccount.status = accountParams.status;
            }
            // update
            accounts[index] = originalAccount;
            // 201 Created
            res.status(200).json(originalAccount);
        }
    }
    catch(error){
        // 400 bad request
        res.status(400).end();
    }
}


/**
 * Check login credentials
 */
function loginAccount(req: Request, res: Response, next: any){
    try{
        // cast body to type
        const loginAccount = req.body as IAccount;
        // get index
        const index = accounts.findIndex(item => (item.email === loginAccount.email && 
                                                  item.password === loginAccount.password));
        if(index === -1){
            // 401 Unauthorized
            res.status(401).end();
        }
        else{
            // 200 OK + json
            res.json({ auth: true, token: {} })
        }
    }
    catch(error){
        // 400 bad request
        res.status(400).end();
    }
}


/**
 * Check login credentials
 */
function logoutAccount(req: Request, res: Response, next: any){
    try{
        // 200 OK + json
        res.json({ auth: false, token: null });
    }
    catch(error){
        // 400 bad request
        res.status(400).end();
    }
}
//
export default {
    getAllAccounts,
    getAccountById,
    addAccount,
    setAccount,
    loginAccount,
    logoutAccount
}