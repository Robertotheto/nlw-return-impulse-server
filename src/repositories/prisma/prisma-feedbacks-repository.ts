import { prisma } from "../../prisma";
import { FeedbackRepository, FeedbackRepositoryData } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbackRepository {
  async create({ type, comment, screenshot }: FeedbackRepositoryData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    });
  }
}