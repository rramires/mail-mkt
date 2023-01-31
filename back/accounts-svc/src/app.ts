// imports
import express from 'express';
import helmet from 'helmet';

/**
 * Express Application
 */
const app = express();
// security
app.use(helmet());
// json parser
app.use(express.json());
// start server
app.listen(process.env.APP_PORT, () => {
    console.log(`${process.env.APP_NAME} started at port: 3000`);
});

