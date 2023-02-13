// imports
import { jest, describe, expect, it, beforeAll, afterAll } from '@jest/globals';
import request from 'supertest';
import app from "../src/app";
import accountsApp from '../../accounts-svc/src/app';
import { IContact } from '../src/models/contact';
import repository from '../src/models/contactRepository'
//
const emailTest = 'jest@contacts.com';
const passTest = 'abc123'; 
// mock .env parameter
process.env.JWT_EXPIRES='300';
// const hashPassTest = '$2a$12$fkAMJ7w/NOs9THhMezTjg.DwFuhTNq6Ayuo79SIShg5.MXTdzbrh6'; // <=> abc123
// aux
let idAccountTest = 0;
let token = '';
let idContactTest = 0;

// 
beforeAll(async () => {
    
    // mocking
    const payload = {
        name: 'Jest',
        email: emailTest,
        password: passTest,
        domain: 'prefix.domain.test'
    }
    // call http method - add test account
    const account = await request(accountsApp)
                            .post('/accounts')
                            .send(payload);
    idAccountTest = account.body.id;
    // login
    const result = await request(accountsApp)
                            .post('/accounts/login')
                            .send({
                                email: emailTest,
                                password: passTest
                            });
    // get token
    token = result.body.token;
});
//
afterAll(async () => {
    // remove test account created on "POST /accounts..."" test
    await await request(accountsApp).delete('/accounts/' + idAccountTest)
                                        .set('x-access-token', token);
});
//
describe('Testing contacts routes', () => {
    //
    // tests
    it('GET /contacts - Should return 200 OK and array', async () => {
        // call http method
        const result = await request(app)
                                .get('/contacts/')
                                .set('x-access-token', token); 
        // check 
        expect(result.status).toEqual(200);
        expect(Array.isArray(result.body)).toBeTruthy();
    });
});