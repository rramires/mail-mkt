import bcrypt from 'bcryptjs';

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
//
export default{
    hashPassword,
    comparePassword
}