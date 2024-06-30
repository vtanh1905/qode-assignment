import { PrismaClient } from '../utils'

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

  public async insert(url: string) {
    return await PrismaClient.getInstance().images.create({
      data: {
        url
      }
    });
  }
}
