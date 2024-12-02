const request = require('supertest')
const server = require('../api/server')

describe('GET /', () => {
    it('environment is testing', () => {
        // Ensure that the environment is set to 'testing'
        expect(process.env.NODE_ENV).toBe('testing')
    })
    it('should return "API is UP!"', async () => {
        const response = await request(server).get('/')

        // Expect a 200 status code and the message in the response body
        expect(response.status).toBe(200)
        expect(response.body.message).toBe('API is UP!')
    })
})
