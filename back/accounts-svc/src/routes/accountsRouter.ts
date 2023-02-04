// imports
import { Router } from "express";
//
import accountsController from "../controllers/accountsController";
import { validateAccount, validateUpdateAccount, validateLogin, validateAuth } from './middlewares';


/**
 * Routes
 */
const router = Router();

/**
 * GET All accounts 
 */
router.get('/accounts', validateAuth, accountsController.getAllAccounts);


/**
 * GET account by ID
 */
router.get('/accounts/:id', validateAuth, accountsController.getAccountById);


/**
 * POST add new account
 */
router.post('/accounts', validateAccount, accountsController.addAccount);


/**
 * PATCH update account
 */
router.patch('/accounts/:id', validateAuth, validateUpdateAccount, accountsController.setAccount);


/**
 * POST to check login credentials
 */
router.post('/accounts/login', validateLogin, accountsController.loginAccount);


/**
 * POST to logout
 */
router.post('/accounts/logout', accountsController.logoutAccount);
//
export default router;