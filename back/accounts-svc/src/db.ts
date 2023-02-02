// imports
import { Dialect, Sequelize } from "sequelize";
//

/**
 * Database ORM - Sequelize
 */
const sequelize = new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USER!,
    process.env.DB_PASS!,
    {
        dialect: process.env.DB_DIALECT as Dialect,
        host : process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT!),
        logging: parseInt(process.env.DB_LOGS!) === 1 ? true : false
    }
);
//
export default sequelize;