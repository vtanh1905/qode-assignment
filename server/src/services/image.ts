import { PrismaClient } from '../utils'
import * as fs from 'fs'
import { v4 as uuidv4 } from 'uuid'
import { s3 } from '../utils/s3'

export class ImageService {
  static #instance: ImageService

  public static getInstance() {
    if (!ImageService.#instance) {
      ImageService.#instance = new ImageService()
    }
    return ImageService.#instance
  }

  public async getAll() {
    return await PrismaClient.getInstance().images.findMany({
      orderBy: [
        {
          id: 'desc'
        }
      ],
      include: {
        comments: {
          select: {
            id: true,
            name: true,
            message: true,
          },
        },
      },
    });
  }

  public async insert(file: any) {
    const fileContent = fs.readFileSync(file.path)
    const extension = file.originalname.split('.')[1]
    const key = `images/${uuidv4()}.${extension}`
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME ?? '',
      Key: key,
      Body: fileContent,
    };

    const data: any = await new Promise((resolve, reject) => {
      s3.upload(params, (err: any, data: any) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    })

    await PrismaClient.getInstance().images.create({
      data: {
        url: data.Location,
      }
    })

    return true;
  }
}
