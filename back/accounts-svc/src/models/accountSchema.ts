// imports
import Joi from 'joi';


const accountSchema = Joi.object({
    id: Joi.number()
           .integer()
           .min(1),
    name: Joi.string()
             .min(3)
             .max(160)
             .required(),
    email: Joi.string()
              .min(8)
              .max(160)
              .email()
              .required(),
    password: Joi.string()
                 .min(6)
                 .max(60)
                 .required(),
    status: Joi.number()
               .integer()
               .min(100)
               .max(400),
    domain: Joi.string()
               .min(5)
               .max(150)
               .required()
});


const loginSchema = Joi.object({
    email: Joi.string()
              .min(8)
              .max(150)
              .email()
              .required(),
    password: Joi.string()
                 .min(6)
                 .max(64)
                 .required()
});


const accountUpdateSchema = Joi.object({
    
    name: Joi.string()
             .min(3),
    password: Joi.string()
                 .min(6)
                 .max(64),
    status: Joi.number()
               .integer()
               .min(100)
               .max(400),
    domain: Joi.string()
               .min(5)
               .max(150)
});
//
export { 
    accountSchema,
    loginSchema,
    accountUpdateSchema
}