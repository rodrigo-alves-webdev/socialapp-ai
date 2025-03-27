import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { PostService } from '../services/PostService';
import { IPost } from '../interfaces/global.interface';

const service = PostService;

class PostController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const loggedUserId = req.params.userId
      
      if (!loggedUserId) {
        return res.status(401).json({ message: 'Usuário não autenticado' });
      }

      console.log("User Id: ", loggedUserId)

      const { author } = req.body as IPost;

      console.log("Author: ", author)

      if (author.toString() !== loggedUserId) {
        return res.status(403).json({ message: 'Você não tem permissão para criar este post' });
      }

      const post = await service.createPost(req.body as IPost);
      return res.status(201).json(post);
    } catch (error: unknown) {
      return res.status(500).json({
        message: error instanceof Error ? error.message : 'Erro ao criar post',
      });
    }
  }

  public async get(_req: Request, res: Response): Promise<Response> {
    try {
      const posts = await service.getPosts();
      return res.status(200).json(posts);
    } catch (error: unknown) {
      return res.status(500).json({
        message: error instanceof Error ? error.message : 'Erro ao buscar posts',
      });
    }
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    try {
      const objectId = new Types.ObjectId(req.params.id);
      const post = await service.getPostById(objectId.toString());
      if (!post) return res.status(404).json({ message: 'Post não encontrado' });
      return res.status(200).json(post);
    } catch (error: unknown) {
      return res.status(500).json({
        message: error instanceof Error ? error.message : 'Erro ao buscar post por ID',
      });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const objectId = new Types.ObjectId(req.params.id);
      const updatedPost = await service.updatePost(objectId.toString(), req.body as Partial<IPost>);

      if (!updatedPost) return res.status(404).json({ message: 'Post não encontrado para atualização' });

      return res.status(200).json(updatedPost);
    } catch (error: unknown) {
      return res.status(500).json({
        message: error instanceof Error ? error.message : 'Erro ao atualizar post',
      });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const objectId = new Types.ObjectId(req.params.id);
      const deletedPost = await service.deletePost(objectId.toString());

      if (!deletedPost) return res.status(404).json({ message: 'Post não encontrado para exclusão' });

      return res.status(200).json(deletedPost);
    } catch (error: unknown) {
      return res.status(500).json({
        message: error instanceof Error ? error.message : 'Erro ao deletar post',
      });
    }
  }
}

export default new PostController();