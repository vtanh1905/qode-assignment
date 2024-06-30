import * as dotenv from 'dotenv'
import express, { Express } from 'express'
import * as bodyParser from 'body-parser'
import cors from 'cors'

import { commentsController, imagesController } from './controllers'
import { errorHandlerMiddleware } from './middlewares'

// Read Environment variable from .env file
dotenv.config({ path: `${__dirname}/../.env` })

function bootstrap() {
  const app: Express = express()
  const port = process.env.PORT

  // Config Cors
  app.use(bodyParser.json())
  app.use(
    cors({
      origin: process.env.ACCESS_CONTROL_ALLOW_ORIGIN
    })
  )

  // Import API Controllers
  app.use('/api/images', imagesController)
  app.use('/api/comments', commentsController)

  // Error Handler
  app.use(errorHandlerMiddleware)

  return app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
  })
}

bootstrap()