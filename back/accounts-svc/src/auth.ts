// imports
import fs from 'fs';
import bcrypt from 'bcryptjs';
import jwt, { VerifyOptions } from 'jsonwebtoken';
import { number } from 'joi';
//
// read RSA keys
const privateKey = fs.readFileSync('./keys/private.key', 'utf-8');
const publicKey = fs.readFileSync('./keys/public.key', 'utf-8');
// read expire time
const jwtExpires = parseInt(`${process.env.JWT_EXPIRES}`);
// encrypt algorithm
const jwtAlgorithm = "RS256";

// create token type
type Token = { accountId: number };


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
    try{
        const decoded = await jwt.verify(token, publicKey, { algorithm: [jwtAlgorithm] } as VerifyOptions) as Token;
        return { accountId: decoded.accountId };
    }
    catch(error){
        console.log(error);
        return null;
    }
}
//
export default{
    hashPassword,
    comparePassword,
    sign,
    verify
}