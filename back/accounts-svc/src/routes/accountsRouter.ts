// imports
import { Router } from "express";
//
import accountsController from "../controllers/accountsController";
import { validateAccountSchema, validateUpdateAccountSchema, validateLoginSchema, validateAuth } from './middlewares';
//
import calc from 'mm-commons/calc';


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
router.post('/accounts', validateAccountSchema, accountsController.addAccount);


/**
 * PATCH update account
 */
router.patch('/accounts/:id', validateAuth, validateUpdateAccountSchema, accountsController.setAccount);


/**
 * POST to check login credentials
 */
router.post('/accounts/login', validateLoginSchema, accountsController.loginAccount);


/**
 * POST to logout
 */
router.post('/accounts/logout', accountsController.logoutAccount);


/**
 * Test __commons__ config
 */
router.get('/calc/:v1/:v2', (req, res, next) => {
    const v1 = parseInt(`${req.params.v1}`);
    const v2 = parseInt(`${req.params.v2}`);
    const result = calc(v1, v2);
    console.log('sum: ', v1, '+', v2, '=', result);
    res.json(result);
});
//
export default router;