import { AnalyticsModel } from '../models/AnalyticsModel';
import { IAnalytics } from '../interfaces/global.interface';

export class AnalyticsService {
  static async getAnalyticsByPost(postId: string): Promise<IAnalytics | null> {
    return AnalyticsModel.findOne({ postId });
  }

  static async updateAnalytics(postId: string, data: Partial<IAnalytics>): Promise<IAnalytics | null> {
    return AnalyticsModel.findOneAndUpdate({ postId }, data, { new: true, upsert: true });
  }
}