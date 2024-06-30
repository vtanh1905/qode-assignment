import { Router, Request, Response, NextFunction } from 'express'

import { CommentService } from '../services'
import { createCommentValidator } from '../validators'

const commentsController: Router = Router()

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { image_id, name, message } = req.body

    await CommentService.getInstance().insert({
      image_id,
      name,
      message,
    })

    res.json({
      message: 'success'
    })
  } catch (error) {
    next(error)
  }
}

commentsController.post('/', createCommentValidator, create)

export { commentsController }
