// imports
import request from 'supertest';
import app from "../src/app";
import { IAccount } from '../src/models/account';
//

describe('Testing account routes', () => {


    it('MOCK Test OK', async () => {
        expect(true).toBeTruthy();
    });

    //
    // tests
    /*it('GET /accounts - Should return 200 OK and array', async () => {
        // call http method
        const result = await request(app)
                                .get('/accounts/');
        // check 
        expect(result.status).toEqual(200);
        expect(Array.isArray(result.body)).toBeTruthy();
    });

    
    it('POST /accounts - Should return 201 Created', async () =>{
        // mock data
        const payload: IAccount = {
            name: 'Jest1',
            email: 'jest1@test.com',
            password: 'abc123',
            domain: 'prefix.domain.test'
        }
        // call http method
        const result = await request(app)
                                .post('/accounts/')
                                .send(payload);
        // check 
        expect(result.status).toEqual(201);
        expect(result.body.id).toBe(1);
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
            name: 'Beltrano',
            email: 'belt@test.com',
            password: 'abc12345',
            status: 200
        }
        // call http method
        const result = await request(app)
                                .patch('/accounts/1') // OK
                                .send(payload);
        // check 
        expect(result.status).toEqual(200);
        expect(result.body.id).toBe(1);
    });

    it('PATCH /accounts/:id - Should return  Not Found', async () =>{
        // mock data
        const payload = {
            name: 'Beltrano',
            email: 'belt@test.com',
            password: 'abc12345',
            status: 200
        }
        // call http method
        const result = await request(app)
                                .patch('/accounts/-1') // inexistent ID
                                .send(payload);
        // check 
        expect(result.status).toEqual(404);
    });


    it('PATCH /accounts/:id - Should return 400 Bad Request', async () =>{
        // mock data
        const payload = {
            name: 'Beltrano',
            email: 'belt@test.com',
            password: 'abc12345',
            status: 200
        }
        // call http method
        const result = await request(app)
                                .patch('/accounts/abc') // invalid ID
                                .send(payload);
        // check 
        expect(result.status).toEqual(400);
    });


    it('GET /accounts/:id - Should return 200 OK', async () => {
        // call http method
        const result = await request(app)
                                .get('/accounts/1'); // OK
        // check 
        expect(result.status).toEqual(200);
        expect(result.body.id).toBe(1);
    });

    it('GET /accounts/:id - Should return 404 Not Found', async () => {
        // call http method
        const result = await request(app)
                                .get('/accounts/-1'); // inexistent ID
        // check 
        expect(result.status).toEqual(404);
    });

    it('GET /accounts/:id - Should return 400 Bad Request', async () => {
        // call http method
        const result = await request(app)
                                .get('/accounts/abc'); // invalid ID
        // check 
        expect(result.status).toEqual(400);
    }); 
    */
});