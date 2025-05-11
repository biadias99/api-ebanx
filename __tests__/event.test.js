import * as matchers from 'jest-extended';
import request from 'supertest';
import app from '../app.js';

expect.extend(matchers);

describe('API Tests - Events', () => {
    it('should return all the events', async () => {
        const response = await request(app).get('/event');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    operation_id: expect.any(Number),
                    date_created: expect.any(String),
                    origin: expect.toBeOneOf([expect.any(Number), null]),
                    destination: expect.toBeOneOf([expect.any(Number), null]),
                    amount: expect.any(Number)
                }),
            ])
        );
    });

    it('should make a deposit', async () => {
        const newEvent = {
            "type": "deposit",
            "destination": 1,
            "amount": 10
        };

        await request(app)
            .post('/event')
            .send(newEvent)
            .expect(201)
            .expect('Content-Type', /json/);
    }); 

    it('should make a withdraw', async () => {
        const newEvent = {
            "type": "withdraw",
            "origin": 1,
            "amount": 10
        };

        await request(app)
            .post('/event')
            .send(newEvent)
            .expect(201)
            .expect('Content-Type', /json/);
    }); 

    it('should make a transfer', async () => {
        const newEvent = {
            "type": "withdraw",
            "origin": 1,
            "destination": 2,
            "amount": 10
        };

        await request(app)
            .post('/event')
            .send(newEvent)
            .expect(201)
            .expect('Content-Type', /json/);
    }); 
});
