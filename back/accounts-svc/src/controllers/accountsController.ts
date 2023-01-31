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
        console.log(error);
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
        console.log(error);
        // 400 bad request
        res.status(400).end();
    }
}
//
export default {
    getAllAccounts,
    getAccountById,
    addAccount
}