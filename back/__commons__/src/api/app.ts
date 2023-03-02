// imports
import express, { Router } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
//
export default (router: Router) => {
    /**
     * Express Application
     */
    const app = express();
    // slice requests
    app.use(morgan('dev'));
    // security
    app.use(helmet());
    // source of requests
    app.use(cors({
        origin: '*'
    })); 
    // json parser
    app.use(express.json());
    //
    // app routes
    app.use(router);
    //
    return app;
}

