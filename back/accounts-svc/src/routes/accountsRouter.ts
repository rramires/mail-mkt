// imports
import { Router } from "express";
//
import accountsController from "../controllers/accountsController";
import { validateAccountSchema, validateLoginSchema } from './middlewares';


/**
 * Routes
 */
const router = Router();

/**
 * GET All accounts 
 */
router.get('/accounts', accountsController.getAllAccounts);


/**
 * GET account by ID
 */
router.get('/accounts/:id', accountsController.getAccountById);


/**
 * POST add new account
 */
router.post('/accounts', validateAccountSchema, accountsController.addAccount);


/**
 * PATCH update account
 */
router.patch('/accounts/:id', validateAccountSchema, accountsController.setAccount);


/**
 * POST to check login credentials
 */
router.post('/accounts/login', validateLoginSchema, accountsController.loginAccount);


/**
 * POST to logout
 */
router.post('/accounts/logout', accountsController.logoutAccount);
//
export default router;