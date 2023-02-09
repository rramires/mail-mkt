// imports
import { Router } from "express";
//
import middlewareCommons from 'mm-commons/api/routes/middlewares';
import contactsController from "../controllers/contactsController";

/**
 * Routes
 */
const router = Router();

/**
 * GET contacts by account ID (id from validate token)
 */
router.get('/contacts', middlewareCommons.validateAuth, contactsController.getContactsByAccountId);
//
export default router;