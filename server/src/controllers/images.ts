import { Router, Request, Response, NextFunction } from 'express'

import { ImageService } from '../services'

const imagesController: Router = Router()

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({
      message: 'success',
      data: await ImageService.getInstance().getAll(),
    })
  } catch (error) {
    next(error)
  }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { url } = req.body

    await ImageService.getInstance().insert(url)

    res.json({
      message: 'success'
    })
  } catch (error) {
    next(error)
  }
}

imagesController.get('/', getAll)

export { imagesController }
