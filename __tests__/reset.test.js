import request from 'supertest';
import app from '../app.js';

describe('API Tests - Reset', () => {
    it('reset the events and balance data', async () => {
        const response = await request(app)
            .post('/reset')
            .expect(200)
      
        expect(response.status).toBe(200);
    }); 

});
