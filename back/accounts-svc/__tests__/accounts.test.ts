import request from 'supertest';
import app from "../src/app";
//
describe('Testing account routes', () => {
    it('POST /accounts - Should return 201', async () =>{
        // mock data
        const payload = {
            id: 1,
            name: 'Fulano',
            email: 'fula@test.com',
            password: 'abc123',
            status: 1
        }
        // call http method
        const result = await request(app)
                                .post('/accounts/')
                                .send(payload);
        // check 
        expect(result.status).toEqual(201);
    });
});