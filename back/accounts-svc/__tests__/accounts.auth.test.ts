// imports
import request from 'supertest';
import app from "../src/app";
//
//
describe('Testing authentication routes', () => {
    //
    it('POST /accounts/login - Should return 200 OK', async () =>{
        // mocking
        const payloadAdd = {
            id: 1,
            name: 'Fulano',
            email: 'fula@test.com',
            password: 'abc123',
            status: 100
        }
        // call http method
        await request(app)
                    .post('/accounts/')
                    .send(payloadAdd);
        //
        // testing
        const payloadLogin = {
            email: 'fula@test.com',
            password: 'abc123'
        }
        // call http method
        const result = await request(app)
                                .post('/accounts/login')
                                .send(payloadLogin);
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
                                .post('/accounts/logout');
        // check 
        expect(result.status).toEqual(200);
    });
});
