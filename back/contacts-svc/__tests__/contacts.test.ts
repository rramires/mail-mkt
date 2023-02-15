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
// aux
let idAccountTest = 0;
let token = '';
let idContactTest = 0;

// 
beforeAll(async () => {
    // mocking account
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
    // remove test contact 
    await repository.remove(idContactTest, idAccountTest);
    // remove test account 
    await await request(accountsApp).delete('/accounts/' + idAccountTest)
                                        .set('x-access-token', token);
});
//
describe('Testing contacts routes', () => {
    //
    // tests
    it('POST /contacts/ - Should return 201 Created', async () => {
        // payload
        const payload = {
            name: 'Jest',
            email: emailTest,
            phone: '4199998888',
    
        } as IContact;
        // call http method
        const result = await request(app)
                                .post('/contacts/')
                                .set('x-access-token', token)
                                .send(payload); 
        // set ID for next tests
        idContactTest = result.body.id;
        // check 
        expect(result.status).toEqual(201);
        expect(result.body.id).toBeTruthy();
    });

    // tests
    it('POST /contacts/ - Should return 400 Bad Request', async () => {
        // payload
        const payload = {
            name: 'Jest',
            email: emailTest, // Same email breaks unique constraint in Database
            phone: '4199998888',
    
        } as IContact;
        // call http method
        const result = await request(app)
                                .post('/contacts/')
                                .set('x-access-token', token)
                                .send(payload); 
        // check 
        expect(result.status).toEqual(400);
    });

    it('POST /contacts/ - Should return 401 Unauthorized', async () => {
        // payload
        const payload = {
            name: 'Jest',
            email: emailTest,
            phone: '4199998888',
    
        } as IContact;
        // call http method
        const result = await request(app)
                                .post('/contacts/')
                                .set('x-access-token', 'INVALID')
                                .send(payload); 
        // check 
        expect(result.status).toEqual(401);
    });

    it('POST /contacts/ - Should return 422 Unprocessable Entity', async () => {
        // payload
        const payload = {
            nonexistent: 'params'
        };
        // call http method
        const result = await request(app)
                                .post('/contacts/')
                                .set('x-access-token', token)
                                .send(payload); 
        // check 
        expect(result.status).toEqual(422);
    }); 


    it('GET /contacts - Should return 200 OK and array', async () => {
        // call http method
        const result = await request(app)
                                .get('/contacts/')
                                .set('x-access-token', token); 
        // check 
        expect(result.status).toEqual(200);
        expect(Array.isArray(result.body)).toBeTruthy();
    });

    it('GET /contacts - Should return 401 Unauthorized', async () => {
        // call http method
        const result = await request(app)
                                .get('/contacts/')
                                .set('x-access-token', 'INVALID'); 
        // check 
        expect(result.status).toEqual(401);
    });


    it('GET /contacts/:id - Should return 200 OK + Object', async () => {
        // call http method
        const result = await request(app)
                                .get('/contacts/' + idContactTest)
                                .set('x-access-token', token); 
        // check 
        expect(result.status).toEqual(200);
        expect(result.body.id).toEqual(idContactTest);
    });

    it('GET /contacts/:id - Should return 404 Not Found', async () => {
        // call http method
        const result = await request(app)
                                .get('/contacts/-1') // Invalid ID
                                .set('x-access-token', token); 
        // check 
        expect(result.status).toEqual(404);
    });

    it('GET /contacts/:id - Should return 400 Bad Request', async () => {
        // call http method
        const result = await request(app)
                                .get('/contacts/abc') // Invalid Format
                                .set('x-access-token', token); 
        // check 
        expect(result.status).toEqual(400);
    });

    it('GET /contacts/:id - Should return 401 Unauthorized', async () => {
        // call http method
        const result = await request(app)
                                .get('/contacts/' + idContactTest)
                                .set('x-access-token', 'INVALID'); // Invalid Token
        // check 
        expect(result.status).toEqual(401);
    });

    it('PATCH /contacts/:id - Should return 200 OK', async () => {
        // payload
        const payload = {
            name: 'Jest 2',
            phone: '4198887777',
            status: 200
        } as IContact;
        // call http method
        const result = await request(app)
                                .patch('/contacts/' + idContactTest)
                                .set('x-access-token', token)
                                .send(payload); 
        // check 
        expect(result.status).toEqual(200);
        expect(result.body.id).toBeTruthy();
        expect(result.body.name).toEqual(payload.name);
    });

    it('PATCH /contacts/:id - Should return 401 Unauthorized', async () => {
        // payload
        const payload = {
            name: 'Jest 2',
            phone: '4198887777',
            status: 200
        } as IContact;
        // call http method
        const result = await request(app)
                                .patch('/contacts/' + idContactTest)
                                .set('x-access-token', 'INVALID')
                                .send(payload); 
        // check 
        expect(result.status).toEqual(401);
    });

    it('PATCH /contacts/:id - Should return 422 Unprocessable Entity', async () => {
        // payload
        const payload = {
            nonexistent: 'params'
        };
        // call http method
        const result = await request(app)
                                .patch('/contacts/' + idContactTest)
                                .set('x-access-token', token)
                                .send(payload); 
        // check 
        expect(result.status).toEqual(422);
    });

    it('PATCH /contacts/:id - Should return 404 Not Found', async () => {
        // payload
        const payload = {
            name: 'Jest 2',
            phone: '4198887777',
            status: 200
        } as IContact;
        // call http method
        const result = await request(app)
                                .patch('/contacts/-1')
                                .set('x-access-token', token)
                                .send(payload); 
        // check 
        expect(result.status).toEqual(404);
    }); 

    it('PATCH /contacts/:id - Should return 400 Bad Request', async () => {
        // payload
        const payload = {
            name: 'Jest 2',
            phone: '4198887777',
            status: 200
        } as IContact;
        // call http method
        const result = await request(app)
                                .patch('/contacts/abc')
                                .set('x-access-token', token)
                                .send(payload); 
        // check 
        expect(result.status).toEqual(400);
    }); 
});