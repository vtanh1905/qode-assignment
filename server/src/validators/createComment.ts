import { checkSchema } from 'express-validator'
import { checkSchemaErrorMiddleware } from './checkSchemaError'

export const createCommentValidator: any = [
  checkSchema({
    image_id: {
      in: ['body'],
      isInt: true,
    },
    name: {
      in: ['body'],
      notEmpty: true,
    },
    message: {
      in: ['body'],
      notEmpty: true,
    }
  }),
  checkSchemaErrorMiddleware
]
