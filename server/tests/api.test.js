const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../app');
const Item = require('../models/Item');

jest.mock('../models/Item');

const JWT_SECRET = process.env.JWT_SECRET || 'dev-only-change-this-secret';

const token = jwt.sign(
  { id: '507f1f77bcf86cd799439011' },
  JWT_SECRET
);

describe('API Tests', () => {

  test('health endpoint', async () => {
    const res = await request(app).get('/api/health');

    expect(res.status).toBe(200);
  });

  test('item validation rejects empty title', async () => {
    const res = await request(app)
      .post('/api/items')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: '',
        type: 'lost'
      });

    expect(res.status).toBe(400);
  });

  test('items endpoint uses mocked model', async () => {
    Item.find.mockReturnValue({
      sort: jest.fn().mockResolvedValue([
        {
          _id: 'abc',
          title: 'Book',
          type: 'lost'
        }
      ])
    });

    const res = await request(app)
      .get('/api/items')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(res.body[0].title).toBe('Book');
  });

});