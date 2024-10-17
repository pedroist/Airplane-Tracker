import request from 'supertest';
import express from 'express';
import planesRoute from '../routes/planesRoute';

const app = express();
app.use('/api/planes', planesRoute);

describe('GET /api/planes', () => {
  it('should return planes data', async () => {
    const response = await request(app).get('/api/planes');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeLessThanOrEqual(30);
  });
});
