import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on succes', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Matheus',
        email: 'teste@teste.com.br',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
