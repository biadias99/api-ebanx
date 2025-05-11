import request from 'supertest';
import app from '../app.js';

describe('API Tests - Balances', () => {
    it('should return a balance by account id', async () => {
        const response = await request(app).get('/balance/1');
        expect(response.status).toBe(200);
        expect(typeof response.body).toBe('number');
    });

    it('should return 404 if the account id was not found', async () => {
        const response = await request(app).get('/balance/99999');
        expect(response.status).toBe(404);
        expect(response.body).toBe(0);
    }); 
});
