// imports
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
//
import authCommons, { Token } from 'mm-commons/api/auth';

console.log('__dirname: ', __dirname);
console.log('path: ', path.resolve(__dirname, '../keys/public.key'));

//
// read RSA keys
const privateKey = fs.readFileSync(path.resolve(__dirname, '../keys/private.key'), 'utf-8');
// read expire time
const jwtExpires = parseInt(`${process.env.JWT_EXPIRES}`);
// encrypt algorithm
const jwtAlgorithm = "RS256";


/**
 * Return password hash
 */
function hashPassword(pass: string): string{
    return bcrypt.hashSync(pass, 12);
}


/**
 * Return password hash
 */
function comparePassword(pass: string, hash: string): boolean{
    return bcrypt.compareSync(pass, hash);
}


/**
 * Return jwt token
 */
function sign(accountId: number){
    const token: Token = { accountId }
    return jwt.sign(token, privateKey, { expiresIn: jwtExpires, algorithm: jwtAlgorithm });
}


/**
 * Verify jwt token
 */
async function verify(token: string){
    return authCommons.verify(token);
}
//
export default{
    hashPassword,
    comparePassword,
    sign,
    verify
}