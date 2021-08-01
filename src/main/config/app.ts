import express from 'express'
import setupMiddleware from './middlewares'
import setupRouts from './routes'

const app = express()
setupMiddleware(app)
setupRouts(app)
export default app
