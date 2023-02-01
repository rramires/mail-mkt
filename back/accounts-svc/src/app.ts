// imports
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
//
// routes
import accountsRouter from './routes/accountsRouter';


/**
 * Express Application
 */
const app = express();
// slice requests
app.use(morgan('dev'));
// security
app.use(helmet());
// json parser
app.use(express.json());
//
// app routes
app.use(accountsRouter);
//
export default app;


