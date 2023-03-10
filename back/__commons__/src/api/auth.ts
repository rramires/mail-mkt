// imports
import fs from 'fs';
import jwt, { VerifyOptions } from 'jsonwebtoken';

//
// read RSA keys
const publicKey = fs.readFileSync('./../__commons__/keys/public.key', 'utf-8');
// encrypt algorithm
const jwtAlgorithm = "RS256";

// create token type
export type Token = { accountId: number };


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
    verify
}