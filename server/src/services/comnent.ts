import { PrismaClient } from '../utils'

type CommentCreateData = {
    image_id: number;
    name: string;
    message: string;
};

export class CommentService {
  static #instance: CommentService

  public static getInstance() {
    if (!CommentService.#instance) {
      CommentService.#instance = new CommentService()
    }
    return CommentService.#instance
  }

  public async insert(commentCreateData: CommentCreateData) {
    return await PrismaClient.getInstance().comments.create({
      data: {
        image_id: commentCreateData.image_id,
        name: commentCreateData.name,
        message: commentCreateData.message,
      }
    })
  }
}
