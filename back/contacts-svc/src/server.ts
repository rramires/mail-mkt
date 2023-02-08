import app from './app';
import database from 'mm-commons/data/db';

(async () => {
    try{
        //
        // sync database
        await database.sync();
        console.log(`Running database: ${process.env.DB_NAME}.`);
        //
        // start server
        await app.listen(process.env.APP_PORT);
        console.log(`${process.env.APP_NAME} started at port: ${process.env.APP_PORT}.`);
    }
    catch(error){
        console.error(`${error}`);
    }
})();
