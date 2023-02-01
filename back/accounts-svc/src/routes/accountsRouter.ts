// imports
import { Router, Request, Response } from "express";
//
import { accountSchema } from "../models/accountsModel";
import accountsController from "../controllers/accountsController";


function validateAccountSchema(req: Request, res: Response, next: any){
    // validate
    const { error } = accountSchema.validate(req.body);
    if(error == null){
        next();
    }
    else{
        const { details } = error;
        const message = details.map(item => item.message).join(',');
        console.error(message);
        // 422 Unprocessable Entity
        res.status(422).end();
    }
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
//
export default router;