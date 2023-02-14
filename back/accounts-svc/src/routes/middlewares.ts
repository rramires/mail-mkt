// imports
import { Request, Response } from "express";
import middlewaresCommons from 'mm-commons/api/routes/middlewares';
//
import { accountSchema, accountUpdateSchema, loginSchema } from "../models/accountSchema";


function validateAccountSchema(req: Request, res: Response, next: any){
    // validate
    return middlewaresCommons.validateSchema(accountSchema, req, res, next);
}


function validateUpdateAccountSchema(req: Request, res: Response, next: any){
    // validate
    return middlewaresCommons.validateSchema(accountUpdateSchema, req, res, next);
}


function validateLoginSchema(req: Request, res: Response, next: any){
    // validate
    return middlewaresCommons.validateSchema(loginSchema, req, res, next);
}
//
export { 
    validateAccountSchema,
    validateUpdateAccountSchema,
    validateLoginSchema
}