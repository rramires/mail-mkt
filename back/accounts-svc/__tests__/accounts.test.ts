import request from 'supertest';
import app from "../src/app";
//
describe('Testing account routes', () => {
    //
    // tests
    it('GET /accounts - Should return 200 and array', async () => {
        // call http method
        const result = await request(app)
                                .get('/accounts/');
        // check 
        expect(result.status).toEqual(200);
        expect(Array.isArray(result.body)).toBeTruthy();
    });
    
    it('POST /accounts - Should return 201', async () =>{
        // mock data
        const payload = {
            id: 1,
            name: 'Fulano',
            email: 'fula@test.com',
            password: 'abc123'
            //status: 100
        }
        // call http method
        const result = await request(app)
                                .post('/accounts/')
                                .send(payload);
        // check 
        expect(result.status).toEqual(201);
        expect(result.body.id).toBe(1);
    });

    it('POST /accounts - Should return 422', async () =>{
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

    it('GET /accounts/:id - Should return 200', async () => {
        // call http method
        const result = await request(app)
                                .get('/accounts/1');
        // check 
        expect(result.status).toEqual(200);
        expect(result.body.id).toBe(1);
    });

    it('GET /accounts/:id - Should return 404', async () => {
        // call http method
        const result = await request(app)
                                .get('/accounts/2'); // inexistent ID
        // check 
        expect(result.status).toEqual(404);
    });

    it('GET /accounts/:id - Should return 400', async () => {
        // call http method
        const result = await request(app)
                                .get('/accounts/abc'); // invalid ID
        // check 
        expect(result.status).toEqual(400);
    });
});