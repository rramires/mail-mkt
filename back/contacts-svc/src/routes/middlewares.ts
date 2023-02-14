// imports
import { Request, Response } from "express";
//
import middlewaresCommons from 'mm-commons/api/routes/middlewares';
//
import { contactSchema, contactUpdateSchema } from "../models/contactSchema";


function validateContactSchema(req: Request, res: Response, next: any){
    // validate
    return middlewaresCommons.validateSchema(contactSchema, req, res, next);
}


function validateUpdateContactSchema(req: Request, res: Response, next: any){
    // validate
    return middlewaresCommons.validateSchema(contactUpdateSchema, req, res, next);
}
//
export { 
    validateContactSchema,
    validateUpdateContactSchema
}