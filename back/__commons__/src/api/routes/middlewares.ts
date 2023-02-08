// imports
import { Request, Response } from "express";
import Joi from "joi";
import auth from "../auth";
//
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

async function validateAuth(req: Request, res: Response, next: any){
    try{
        // get token
        const token = req.headers['x-access-token'] as string;
        // verify
        const payload = await auth.verify(token);
        if(payload){
            // set payload for next steps
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
//
export default { 
    validateAuth,
    validateSchema
}