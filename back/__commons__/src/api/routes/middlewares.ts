// imports
import { Request, Response } from "express";
import Joi from "joi";
import auth, { Token } from "../auth";
import controllerCommons from '../controllers/controller';


/**
 * Checks if the body is the same as the schema
 */
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


/**
 * Check if you have authentication token
 */
async function validateAuth(req: Request, res: Response, next: any){
    try{
        // get token
        const token = req.headers['x-access-token'] as string;
        // verify
        const payload = await auth.verify(token);
        if(payload){
            //
            // important!
            // set payload for next steps and filters by accountId
            res.locals.payload = payload;
            // continue
            next();
        }
        else{
            // 401 Unauthorized
            res.status(401).end();
        }
    }
    catch(error){
        console.log(`validateAuth: ${error}`);
        // 400 Bad Request
        res.status(400).end();
    }
}


/**
 * Validate if request id is the same as token id
 */
function validateAuthId(req: Request, res: Response, next: any){
    // get id from request
    const id = parseInt(req.params.id);
    // get token
    const token = controllerCommons.getToken(res) as Token;
    // ensures that only the account owner can delete
    if(token.accountId !== id){
        // 403 Forbidden
        res.status(403).end();
    }
    else{
        next();
    }
}
//
export default { 
    validateSchema,
    validateAuth,
    validateAuthId
}