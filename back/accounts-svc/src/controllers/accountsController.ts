// imports
import { Request, Response } from "express";
import auth from './../auth';
//
import { IAccount } from "../models/account";
import repository from '../models/accountRepository';

/**
 * Add new account
 */
async function addAccount(req: Request, res: Response, next: any){
    try{
        // cast body to type
        const newAccount = req.body as IAccount;
        // hash password
        newAccount.password = auth.hashPassword(newAccount.password);
        // add
        const result = await repository.add(newAccount);
        // get id
        newAccount.id = result.id;
        newAccount.password = '';
        // 201 Created
        res.status(201).json(newAccount);
    }
    catch(error){
        // 400 bad request
        res.status(400).end();
    }
}


/**
 * Return All accounts
 */
async function getAllAccounts(req: Request, res: Response, next: any){
    // get all accounts
    const accounts = await repository.findAll();
    // 200 OK + json
    res.json(accounts.map(item => {
        item.password = '';
        return item;
    }));
}


/**
 * Return account filtered by ID
 */
async function getAccountById(req: Request, res: Response, next: any){
    try{
        // get id
        const id = parseInt(req.params.id);
        if(!id){
            throw new Error('ID is invalid format.');
        }
        // get account
        const account = await repository.findById(id);

        if(account === null){
            // 404 Not Found
            res.status(404).end();
        }
        else{
            account.password = '';
            // 200 OK + json
            res.json(account);
        }
    }
    catch(error){
        // 400 bad request
        res.status(400).end();
    }
}


/**
 * Update account
 */
async function setAccount(req: Request, res: Response, next: any){
    try{
        // get id
        const id = parseInt(req.params.id);
        if(!id){
            throw new Error('ID is invalid format.');
        }
        // cast body to type
        const accountParams = req.body as IAccount;
        // update
        const updatedAccount = await repository.set(id, accountParams);
        if(updatedAccount){
            updatedAccount.password = '';
            // 200 OK + json
            res.status(200).json(updatedAccount);
        }
        else{
            // 404 Not Found
            res.status(404).end();
        }
    }
    catch(error){
        // 400 bad request
        res.status(400).end();
    }
}


/**
 * Remove account filtered by ID
 */
async function deleteAccount(req: Request, res: Response, next: any){
    try{
        // get id
        const id = parseInt(req.params.id);
        if(!id){
            throw new Error('ID is invalid format.');
        }
        // delete account
        await repository.remove(id);
        // 200 OK
        res.status(200).end();
    }
    catch(error){
        // 400 bad request
        res.status(400).end();
    }
}


/**
 * Check login credentials
 */
async function loginAccount(req: Request, res: Response, next: any){
    try{
        // cast body to type
        const loginAccount = req.body as IAccount;
        // get 
        const account = await repository.findByEmail(loginAccount.email);
        //
        if(account !== null){
            //
            const isValid = await auth.comparePassword(loginAccount.password, account.password);
            if(isValid){
                // generate jwt token
                const token = await auth.sign(account.id!);
                 // 200 OK + json
                return res.json({ auth: true, token });
            }
        }
        // 401 Unauthorized
        res.status(401).end();
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
    deleteAccount,
    loginAccount,
    logoutAccount
}