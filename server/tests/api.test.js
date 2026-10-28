const request=require('supertest');const app=require('../app');const Item=require('../models/Item');jest.mock('../models/Item');
test('health endpoint',async()=>{const res=await request(app).get('/api/health');expect(res.status).toBe(200)});
test('item validation rejects empty title',async()=>{const res=await request(app).post('/api/items').send({title:'',type:'lost'});expect(res.status).toBe(400)});
test('items endpoint uses mocked model',async()=>{Item.find.mockReturnValue({sort:jest.fn().mockResolvedValue([{_id:'abc',title:'Book',type:'lost'}])});const res=await request(app).get('/api/items');expect(res.status).toBe(200);expect(res.body[0].title).toBe('Book')});
