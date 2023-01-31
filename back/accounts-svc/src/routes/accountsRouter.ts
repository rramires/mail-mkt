// imports
import { Router, Request, Response } from "express";
//
import accountsController from "../controllers/accountsController";

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
router.post('/accounts', accountsController.addAccount);
//
export default router;