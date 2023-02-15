// imports
import Joi from 'joi';


const contactSchema = Joi.object({
    id: Joi.number()
           .integer()
           .min(1),
    accountId: Joi.number()
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
    phone: Joi.string()
                .pattern(/^[0-9]{10,11}$/),
    status: Joi.number()
                .integer()
                .min(100)
                .max(300)
});


const contactUpdateSchema = Joi.object({
    name: Joi.string()
             .min(3)
             .max(160),
    phone: Joi.string()
                .pattern(/^[0-9]{10,11}$/),
    status: Joi.number()
                .integer()
                .min(100)
                .max(300)
});
//
export { 
    contactSchema,
    contactUpdateSchema
}