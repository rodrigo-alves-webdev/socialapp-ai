import { Router, RequestHandler } from 'express';

import { authMiddleware } from '../middlewares/AuthMiddleware';

import controller from '../controllers/CommentController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Gerenciamento de comentários
 */

/**
 * @swagger
 * /api/comments:
 *   post:
 *     summary: Adiciona um comentário a um post
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               postId:
 *                 type: string
 *               author:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Comentário criado com sucesso
 *       500:
 *         description: Erro ao criar comentário
 */
router.post('/users/:userId/posts/:postId/comments', authMiddleware as unknown as RequestHandler, controller.create as any);

/**
 * @swagger
 * /api/comments/{postId}:
 *   get:
 *     summary: Retorna todos os comentários de um post
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do post
 *     responses:
 *       200:
 *         description: Lista de comentários
 *       500:
 *         description: Erro ao buscar comentários
 */
router.get('/users/:userId/posts/:postId/comments/', authMiddleware as unknown as RequestHandler, controller.getByPostId as any);

router.delete('/users/:userId/posts/:postId/comments/:id', authMiddleware as unknown as RequestHandler, controller.delete as any);

export default router;