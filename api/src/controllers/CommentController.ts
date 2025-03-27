import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { CommentService } from '../services/CommentService';
import { IComment } from '../interfaces/global.interface';

const service = CommentService;

class CommentController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const author = req.params.userId
      const postId = req.params.postId
      const body = {
        ...req.body,
        author,
        postId
      }
      const comment = await service.addComment(body as IComment);
      return res.status(201).json(comment);
    } catch (error: unknown) {
      return res.status(500).json({
        message: error instanceof Error ? error.message : 'Erro ao criar comentário',
      });
    }
  }

  public async getByPostId(req: Request, res: Response): Promise<Response> {
    try {
      const postId = new Types.ObjectId(req.params.postId);
      const comments = await service.getCommentsByPost(postId.toString());
      return res.status(200).json(comments);
    } catch (error: unknown) {
      return res.status(500).json({
        message: error instanceof Error ? error.message : 'Erro ao buscar comentários do post',
      });
    }
  }

   public async delete(req: Request, res: Response): Promise<Response> {
      try {
        const objectId = new Types.ObjectId(req.params.id);
        const deletedComment = await service.deleteCommentByPost(objectId.toString());
  
        if (!deletedComment) return res.status(404).json({ message: 'Comment não encontrado para exclusão' });
  
        return res.status(200).json(deletedComment);
      } catch (error: unknown) {
        return res.status(500).json({
          message: error instanceof Error ? error.message : 'Erro ao deletar post',
        });
      }
    }
}

export default new CommentController();