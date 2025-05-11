import request from 'supertest';
import app from '../app.js';

describe('API Tests - Reset', () => {
    it('reset the events and balance data', async () => {
        await request(app)
            .post('/reset')
            .expect(200)
            .expect('OK');
    }); 

});
