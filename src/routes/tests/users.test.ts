import { db } from 'db';
import request from 'supertest';

import app from '../../app';

describe('/users', () => {
  it('should return a list of users', async () => {
    const mockQuery = jest.fn();
    db.users.all = mockQuery.mockReturnValue([
      { id: 'test_id', name: 'test_name' },
    ]);
    return await request(app)
      .get('/users')
      .expect('Content-Type', /json/)
      .expect(200, [{ id: 'test_id', name: 'test_name' }]);
  });
});

describe('/users/:userId', () => {
  it('should return a User', async () => {
    const mockQuery = jest.fn();
    db.users.byId = mockQuery.mockReturnValue({
      id: 'test_id',
      name: 'test_name',
    });
    return await request(app)
      .get('/users/test_user')
      .expect('Content-Type', /json/)
      .expect(200, { id: 'test_id', name: 'test_name' });
  });
});

describe('/users/:userId/name', () => {
  it("should return a User's name", async () => {
    const mockQuery = jest.fn();
    db.users.byId = mockQuery.mockReturnValue({
      id: 'test_id',
      name: 'test_name',
    });
    return await request(app)
      .get('/users/test_user/name')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200, 'test_name');
  });

  it("should return a User's name in reverse", async () => {
    const mockQuery = jest.fn();
    db.users.byId = mockQuery.mockReturnValue({
      id: 'test_id',
      name: 'test_name',
    });
    return await request(app)
      .get('/users/test_user/name?reverse=1')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200, 'eman_tset');
  });
});
