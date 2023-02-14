// imports
import { Request, Response } from "express";
//
import { Token } from "mm-commons/api/auth";
import controllerCommons from 'mm-commons/api/controllers/controller'
import { IContact } from "src/models/contact";
import repository from '../models/contactRepository';


/**
 * Return contacts by account ID
 */
async function getContactsByAccountId(req: Request, res: Response, next: any){
    try{
        // get auth token from res.locals 
        const token = controllerCommons.getToken(res) as Token;
        // get contacts by account ID
        const contacts = await repository.findByAccountId(token.accountId);
        // 200 + json
        res.json(contacts);
    }
    catch(error){
        console.log(`getContactsByAccountId: ${error}`);
        // 400 Bad Request
        res.status(400).end();
    }
}


/**
 * Return contact by ID
 */
async function getContactById(req: Request, res: Response, next: any){
    try{
        // get id
        const id = parseInt(req.params.id);
        if(!id){
            throw new Error('ID is invalid format.');
        }
        else{
            // get auth token from res.locals 
            const token = controllerCommons.getToken(res) as Token;
            // get contacts by account ID
            const contact = await repository.findById(id, token.accountId);
            if(!contact){
                // 404 Not Found 
                res.status(404).end();
            }
            else{
                // 200 + json
                res.json(contact);
            }
        }
    }
    catch(error){
        console.log(`getContactById: ${error}`);
        // 400 Bad Request
        res.status(400).end();
    }
}


/**
 * Add new contact
 */
async function addContact(req: Request, res: Response, next: any){
    try{
        // cast body to type
        const newContact = req.body as IContact;
        // get auth token from res.locals 
        const token = controllerCommons.getToken(res) as Token;
        // add
        const result = await repository.add(newContact, token.accountId);
        // get id
        newContact.id = result.id;
        // 201 Created
        res.status(201).json(newContact);
    }
    catch(error){
        // 400 bad request
        res.status(400).end();
    }
}
//
export default {
    addContact,
    getContactsByAccountId,
    getContactById
}