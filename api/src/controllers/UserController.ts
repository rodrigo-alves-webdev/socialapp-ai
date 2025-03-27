import { Request, Response } from 'express';
import { Types } from 'mongoose';

import { IUser } from '../interfaces/global.interface';

import { UserService } from '../services/UserService';


const service = UserService;

class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const user = await service.create(req.body as IUser);
      return res.status(201).json(user);
    } catch (error: unknown) {
      return res.status(500).json({
        message: error instanceof Error ? error.message : 'Erro ao criar usuário',
      });
    }
  }

  public async get(_req: Request, res: Response): Promise<Response> {
    try {
      const users = await service.find();
      return res.status(200).json(users);
    } catch (error: unknown) {
      return res.status(500).json({
        message: error instanceof Error ? error.message : 'Erro ao buscar usuários',
      });
    }
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    try {
      const objectId = new Types.ObjectId(req.params.id);
      const user = await service.findUserById(objectId, '');
      if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
      return res.status(200).json(user);
    } catch (error: unknown) {
      return res.status(500).json({
        message: error instanceof Error ? error.message : 'Erro ao buscar usuário por ID',
      });
    }
  }

  public async getOne(req: Request, res: Response): Promise<Response> {
    try {
      const { email } = req.body;
      const user = await service.findOne(email);
      if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
      return res.status(200).json(user);
    } catch (error: unknown) {
      return res.status(500).json({
        message: error instanceof Error ? error.message : 'Erro ao buscar usuário por e-mail',
      });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, celular, active, role } = req.body;
      const objectId = new Types.ObjectId(req.params.id);
      const updatedUser = await service.update(objectId, { name, email, celular, active, role });

      if (!updatedUser) return res.status(404).json({ message: 'Usuário não encontrado para atualização' });

      return res.status(200).json(updatedUser);
    } catch (error: unknown) {
      return res.status(500).json({
        message: error instanceof Error ? error.message : 'Erro ao atualizar usuário',
      });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const objectId = new Types.ObjectId(req.params.id);
      const deletedUser = await service.delete(objectId);

      if (!deletedUser) return res.status(404).json({ message: 'Usuário não encontrado para exclusão' });

      return res.status(200).json(deletedUser);
    } catch (error: unknown) {
      return res.status(500).json({
        message: error instanceof Error ? error.message : 'Erro ao deletar usuário',
      });
    }
  }
}

export default new UserController();
