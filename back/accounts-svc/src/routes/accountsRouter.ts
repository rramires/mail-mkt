// imports
import { Router, Request, Response } from "express";
//
import accountsController from "../controllers/accountsController";

/**
 * Routes
 */
const router = Router();

/**
 * GET accounts 
 */
router.get('/', accountsController.getAccounts);


/**
 * POST accounts 
 */
router.post('/', accountsController.addAccounts);
//
export default router;