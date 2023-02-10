// imports
import { jest, describe, expect, it, beforeAll, afterAll } from '@jest/globals';
import request from 'supertest';
import app from "../src/app";
import { IAccount } from '../src/models/account';
import repository from '../src/models/accountRepository'
import auth from '../src/auth';
//
const emailTest = 'jest@accounts.com';
const passTest = 'abc123'; 
const hashPassTest = '$2a$12$fkAMJ7w/NOs9THhMezTjg.DwFuhTNq6Ayuo79SIShg5.MXTdzbrh6'; // <=> abc123
// aux
let idAccount = 0;
let token = '';
// 
beforeAll(async () => {
    //
});
//
afterAll(async () => {
    // if not deleted in test
    if(idAccount){
        // remove test account created on "POST /accounts..."" test
        await repository.remove(idAccount);
    }
});
//
describe('Testing account routes', () => {
    //
    // tests
    it('POST /accounts - Should return 201 Created', async () =>{
        // mock data
        const payload: IAccount = {
            name: 'Jest',
            email: emailTest,
            password: hashPassTest,
            domain: 'prefix.domain.test'
        }
        // call http method
        const result = await request(app)
                                .post('/accounts/')
                                .send(payload);
        // set ID for next tests
        idAccount = result.body.id;
        // generate mock authorization token
        token = auth.sign(idAccount);
        // check 
        expect(result.status).toEqual(201);
    });

    it('POST /accounts - Should return 422 Unprocessable Entity', async () =>{
        // mock data
        const payload = {
            nonexistent: 'params'
        }
        // call http method
        const result = await request(app)
                                .post('/accounts/')
                                .send(payload);
        // check 
        expect(result.status).toEqual(422);
    });

    
    it('PATCH /accounts/:id - Should return 200 OK', async () =>{
        // mock data
        const payload = {
            name: 'JestTwo',
            password: 'abc123456',
            status: 200,
            domain: 'prefix-two.domain.test'
        }
        // call http method
        const result = await request(app)
                                .patch('/accounts/' + idAccount) // OK
                                .send(payload)
                                .set('x-access-token', token);
        // check 
        expect(result.status).toEqual(200);
        expect(result.body.id).toBe(idAccount);
    }); 


    it('PATCH /accounts/:id - Should return 403 Forbidden', async () =>{
        // mock data
        const payload = {
            name: 'JestTwo',
            password: 'abc123456',
            status: 200,
            domain: 'prefix-two.domain.test'
        }
        // call http method
        const result = await request(app)
                                .patch('/accounts/-1') // inexistent ID
                                .send(payload)
                                .set('x-access-token', token);
        // check 
        expect(result.status).toEqual(403);
    }); 
    
    /* FIXME: Use this test when authorization levels are implemented
    it('PATCH /accounts/:id - Should return 404 Not Found', async () =>{
        // mock data
        const payload = {
            name: 'JestTwo',
            password: 'abc123456',
            status: 200,
            domain: 'prefix-two.domain.test'
        }
        // call http method
        const result = await request(app)
                                .patch('/accounts/-1') // inexistent ID
                                .send(payload)
                                .set('x-access-token', token);
        // check 
        expect(result.status).toEqual(404);
    }); 
    */


    /* FIXME: Use this test when authorization levels are implemented
    it('PATCH /accounts/:id - Should return 400 Bad Request', async () =>{
        // mock data
        const payload = {
            name: 'JestTwo',
            password: 'abc123456',
            status: 200,
            domain: 'prefix-two.domain.test'
        }
        // call http method
        const result = await request(app)
                                .patch('/accounts/abc') // invalid ID
                                .send(payload)
                                .set('x-access-token', token);
        // check 
        expect(result.status).toEqual(400);
    }); 
    */


    it('GET /accounts - Should return 200 OK and array', async () => {
        // call http method
        const result = await request(app)
                                .get('/accounts/')
                                .set('x-access-token', token); 
        // check 
        expect(result.status).toEqual(200);
        expect(Array.isArray(result.body)).toBeTruthy();
    });

    
    it('GET /accounts/:id - Should return 200 OK', async () => {
        // call http method
        const result = await request(app)
                                .get('/accounts/' + idAccount)
                                .set('x-access-token', token); // OK
        // check 
        expect(result.status).toEqual(200);
        expect(result.body.id).toBe(idAccount);
    });

    it('GET /accounts/:id - Should return 403 Forbidden', async () => {
        // call http method
        const result = await request(app)
                                .get('/accounts/-1')
                                .set('x-access-token', token); // inexistent ID
        // check 
        expect(result.status).toEqual(403);
    });

    /* FIXME: Use this test when authorization levels are implemented
    it('GET /accounts/:id - Should return 404 Not Found', async () => {
        // call http method
        const result = await request(app)
                                .get('/accounts/-1')
                                .set('x-access-token', token); // inexistent ID
        // check 
        expect(result.status).toEqual(404);
    });
    */

    /* FIXME: Use this test when authorization levels are implemented
    it('GET /accounts/:id - Should return 400 Bad Request', async () => {
        // call http method
        const result = await request(app)
                                .get('/accounts/abc') // invalid ID
                                .set('x-access-token', token); 
        // check 
        expect(result.status).toEqual(400);
    }); 
     */

    it('GET /accounts/:id - Should return 200 OK', async () => {
        // call http method
        const result = await request(app)
                                .delete('/accounts/' + idAccount)
                                .set('x-access-token', token); // OK
        // check 
        expect(result.status).toEqual(200);
    });

    it('GET /accounts/:id - Should return 403 Forbidden', async () => {
        // call http method
        const result = await request(app)
                                .delete('/accounts/-1') // invalid ID
                                .set('x-access-token', token); // OK
        // check 
        expect(result.status).toEqual(403);
    });
});