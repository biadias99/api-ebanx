import * as matchers from 'jest-extended';
import request from 'supertest';
import app from '../app.js';

expect.extend(matchers);

describe('API Tests - Events', () => {
    it('should return all the events', async () => {
        const response = await request(app).get('/events');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    operation_id: expect.any(Number),
                    date_created: expect.any(String),
                    from_account_id: expect.toBeOneOf([expect.any(Number), null]),
                    to_account_id: expect.toBeOneOf([expect.any(Number), null]),
                    amount: expect.any(Number)
                }),
            ])
        );
    });
});
