// imports
import { Router } from "express";
//
import middlewareCommons from 'mm-commons/api/routes/middlewares';
import { validateContactSchema, validateUpdateContactSchema } from './middlewares'
import contactsController from "../controllers/contactsController";

/**
 * Routes
 */
const router = Router();

/**
 * GET contact by ID (id from validate token)
 */
router.get('/contacts/:id', middlewareCommons.validateAuth, contactsController.getContactById);


/**
 * GET contacts by account ID (id from validate token)
 */
router.get('/contacts', middlewareCommons.validateAuth, contactsController.getContactsByAccountId);


/**
 * POST add new contact
 */
router.post('/contacts', middlewareCommons.validateAuth, validateContactSchema, contactsController.addContact);
//
export default router;