// imports
import { Router } from "express";
//
import middlewaresCommons from 'mm-commons/api/routes/middlewares';
import { validateAccountSchema, validateUpdateAccountSchema, validateLoginSchema } from './middlewares';
import accountsController from "../controllers/accountsController";

//


/**
 * Routes
 */
const router = Router();

/**
 * GET All accounts 
 */
router.get('/accounts', middlewaresCommons.validateAuth, 
                        accountsController.getAllAccounts);


/**
 * GET account by ID
 */
router.get('/accounts/:id', middlewaresCommons.validateAuth,
                            middlewaresCommons.validateAuthId,
                            accountsController.getAccountById);


/**
 * POST add new account
 */
router.post('/accounts', validateAccountSchema, 
                         accountsController.addAccount);


/**
 * PATCH update account
 */
router.patch('/accounts/:id', middlewaresCommons.validateAuth, 
                              middlewaresCommons.validateAuthId,
                              validateUpdateAccountSchema, 
                              accountsController.setAccount);


/**
 * DELETE account by ID
 */
router.delete('/accounts/:id', middlewaresCommons.validateAuth, 
                               middlewaresCommons.validateAuthId,
                               accountsController.deleteAccount);


/**
 * POST to check login credentials
 */
router.post('/accounts/login', validateLoginSchema, 
                               accountsController.loginAccount);


/**
 * POST to logout
 */
router.post('/accounts/logout', middlewaresCommons.validateAuth, 
                                accountsController.logoutAccount);
//
export default router;