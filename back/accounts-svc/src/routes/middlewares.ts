// imports
import { Request, Response } from "express";
import Joi from "joi";
//
import { accountSchema, accountUpdateSchema, loginSchema } from "../models/accountSchema";


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


function validateAccount(req: Request, res: Response, next: any){
    // validate
    return validateSchema(accountSchema, req, res, next);
}


function validateUpdateAccount(req: Request, res: Response, next: any){
    // validate
    return validateSchema(accountUpdateSchema, req, res, next);
}


function validateLogin(req: Request, res: Response, next: any){
    // validate
    return validateSchema(loginSchema, req, res, next);
}
//
export { 
    validateAccount,
    validateUpdateAccount,
    validateLogin
}