import request from 'supertest'
import app from '../app/app.js'

describe('/api/motorcycles', () => {
    const restype= 'application/json; charset=utf-8'
    var token = null

    it('post /motorcycles ', async () => {
      await request(app)
        .post('/api/motorcycles')
        .set('Accept', 'application/json')
        .send({
            name: 'Something'
        })
        .expect('Content-Type', restype)
        .expect(201)

    })
    it('get /motorcycles', async () => {
      await request(app)
        .get('/api/motorcycles')
        .set('Accept', 'application/json')
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('put /motorcycles/:id', async () => {
      await request(app)
        .put('/api/motorcycles/1')
        .set('Accept', 'application/json')
        .send({
            name: 'Another'
        })
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('delete /motorcycles/:id', async () => {
      await request(app)
        .delete('/api/motorcycles/1')
        .set('Accept', 'application/json')
        .expect(200)
    })
})
