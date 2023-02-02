// imports
import { Router, Request, Response } from "express";
import Joi from "joi";
//
import { accountSchema, loginSchema } from "../models/accountsModel";
import accountsController from "../controllers/accountsController";


function validateSchema(schema: Joi.ObjectSchema<any>, req: Request, res: Response, next: any){
    // validate
    const { error } = schema.validate(req.body);
    if(error == null){
        next();
    }
    else{
        const { details } = error;
        const message = details.map(item => item.message).join(',');
        // 422 Unprocessable Entity
        res.status(422).end();
    }
}


function validateAccountSchema(req: Request, res: Response, next: any){
    // validate
    return validateSchema(accountSchema, req, res, next);
}


function validateLoginSchema(req: Request, res: Response, next: any){
    // validate
    return validateSchema(loginSchema, req, res, next);
}


/**
 * Routes
 */
const router = Router();

/**
 * GET All accounts 
 */
router.get('/accounts', accountsController.getAllAccounts);


/**
 * GET account by ID
 */
router.get('/accounts/:id', accountsController.getAccountById);


/**
 * POST add new account
 */
router.post('/accounts', validateAccountSchema, accountsController.addAccount);


/**
 * PATCH update account
 */
router.patch('/accounts/:id', validateAccountSchema, accountsController.setAccount);


/**
 * POST to check login credentials
 */
router.post('/accounts/login', validateLoginSchema, accountsController.loginAccount);


/**
 * POST to logout
 */
router.post('/accounts/logout', accountsController.logoutAccount);
//
export default router;