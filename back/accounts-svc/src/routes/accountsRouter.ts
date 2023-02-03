// imports
import { Router } from "express";
//
import accountsController from "../controllers/accountsController";
import { validateAccount, validateUpdateAccount, validateLogin } from './middlewares';


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
router.post('/accounts', validateAccount, accountsController.addAccount);


/**
 * PATCH update account
 */
router.patch('/accounts/:id', validateUpdateAccount, accountsController.setAccount);


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