import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { AnalyticsService } from '../services/AnalyticsService';
import { IAnalytics } from '../interfaces/global.interface';

const service = AnalyticsService;

class AnalyticsController {
  public async getByPostId(req: Request, res: Response): Promise<Response> {
    try {
      const postId = new Types.ObjectId(req.params.postId);
      const analytics = await service.getAnalyticsByPost(postId.toString());
      if (!analytics) return res.status(404).json({ message: 'Dados de analytics não encontrados' });
      return res.status(200).json(analytics);
    } catch (error: unknown) {
      return res.status(500).json({
        message: error instanceof Error ? error.message : 'Erro ao buscar dados de analytics',
      });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const postId = new Types.ObjectId(req.params.postId);
      const updatedAnalytics = await service.updateAnalytics(postId.toString(), req.body as Partial<IAnalytics>);

      return res.status(200).json(updatedAnalytics);
    } catch (error: unknown) {
      return res.status(500).json({
        message: error instanceof Error ? error.message : 'Erro ao atualizar dados de analytics',
      });
    }
  }
}

export default new AnalyticsController();