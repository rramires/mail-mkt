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
// start server
app.listen(process.env.APP_PORT, () => {
    console.log(`${process.env.APP_NAME} started at port: 3000`);
});

