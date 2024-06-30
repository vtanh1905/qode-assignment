import { Router, Request, Response, NextFunction } from 'express'
import multer from 'multer'
import { ImageService } from '../services'
const upload = multer({ dest: 'uploads/' })

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
    const file = (req as any).file;
    if (!file) {
      return res.status(400).send('No file uploaded');
    }

    await ImageService.getInstance().insert(file);
    
    res.json({
      message: 'success'
    })
  } catch (error) {
    next(error)
  }
}

imagesController.get('/', getAll)
imagesController.post('/', upload.single('file'), create)

export { imagesController }
