// imports
import { jest, describe, expect, it, beforeAll, afterAll } from '@jest/globals';
import request from 'supertest';
import app from "../src/app";
import { IAccount } from '../src/models/account';
import repository from '../src/models/accountRepository';
import auth from '../src/auth';
//
const emailTest = 'jest@accounts.auth.com';
const passTest = 'abc123'; 
const hashPassTest = '$2a$12$fkAMJ7w/NOs9THhMezTjg.DwFuhTNq6Ayuo79SIShg5.MXTdzbrh6'; // <=> abc123
// aux
let idAccount = 0;
let token = '';
// 
beforeAll(async () => {
    // mocking
    const payload: IAccount = {
        name: 'Jest',
        email: emailTest,
        password: hashPassTest,
        domain: 'prefix.domain.test'
    }
    // call http method - add test account
    const result = await repository.add(payload);
    idAccount = result.id!;
    // generate mock authorization token
    token = auth.sign(idAccount);
});
//
afterAll(async () => {
    // call http method - remove test account
    await repository.remove(idAccount);
});
//
describe('Testing authentication routes', () => {
    //
    it('POST /accounts/login - Should return 200 OK', async () =>{
        // testing
        const payload = {
            email: emailTest,
            password: passTest
        }
        // call http method
        const result = await request(app)
                                .post('/accounts/login')
                                .send(payload);
        // check 
        expect(result.status).toEqual(200);
        expect(result.body.auth).toBeTruthy();
        expect(result.body.token).toBeTruthy();
    }); 
    
    it('POST /accounts/login - Should return 401 Unauthorized', async () =>{
        // mock data
        const payload = {
            email: 'nonexistent@test.com',
            password: 'nonexistent'
        }
        // call http method
        const result = await request(app)
                                .post('/accounts/login')
                                .send(payload);
        // check 
        expect(result.status).toEqual(401);
    });

    it('POST /accounts/login - Should return 422 Unprocessable Entity', async () =>{
        // mock data
        const payload = {
            nonexistant: 'param'
        }
        // call http method
        const result = await request(app)
                                .post('/accounts/login')
                                .send(payload);
        // check 
        expect(result.status).toEqual(422);
    });

    
    it('POST /accounts/logout - Should return 200 OK', async () =>{
        // call http method
        const result = await request(app)
                                .post('/accounts/logout')
                                .set('x-access-token', token);
        // check 
        expect(result.status).toEqual(200);
    });
});
