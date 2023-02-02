// imports
import { Request, Response } from "express";
import Joi from "joi";
//
import { accountSchema, loginSchema } from "../models/accountsModel";


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
//
export { 
    validateAccountSchema,
    validateLoginSchema
}