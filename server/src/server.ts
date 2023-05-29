import fastify from 'fastify'
// import cors from '@fastify/cors'
// import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'

const app = fastify()

app.register(multipart)

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3000')
  })
