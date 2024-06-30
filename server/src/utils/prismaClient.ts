import { PrismaClient } from '@prisma/client'

export default class PrismaClientUtil {
  static #instance: PrismaClient

  public static getInstance() {
    if (!PrismaClientUtil.#instance) {
        PrismaClientUtil.#instance = new PrismaClient();
    }
    return PrismaClientUtil.#instance
  }
}
