import { Router, RequestHandler } from 'express';

import { authMiddleware } from '../middlewares/AuthMiddleware';

import controller from '../controllers/PostController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Gerenciamento de posts
 */

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Cria um novo post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [draft, published]
 *     responses:
 *       201:
 *         description: Post criado com sucesso
 *       500:
 *         description: Erro ao criar o post
 */
router.post('/users/:userId/posts', authMiddleware as unknown as RequestHandler, controller.create as any);

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Retorna todos os posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Lista de posts
 *       500:
 *         description: Erro ao buscar posts
 */
router.get('/users/:userId/posts', controller.get as any);

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Retorna um post pelo ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do post
 *     responses:
 *       200:
 *         description: Post encontrado
 *       404:
 *         description: Post não encontrado
 *       500:
 *         description: Erro ao buscar post
 */
router.get('/users/:userId/posts/:id', controller.getById as any);

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Atualiza um post pelo ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [draft, published]
 *     responses:
 *       200:
 *         description: Post atualizado com sucesso
 *       404:
 *         description: Post não encontrado
 *       500:
 *         description: Erro ao atualizar post
 */
router.put('/users/:userId/posts/:id', authMiddleware as unknown as RequestHandler, controller.update as any);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Deleta um post pelo ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do post
 *     responses:
 *       200:
 *         description: Post deletado com sucesso
 *       404:
 *         description: Post não encontrado
 *       500:
 *         description: Erro ao deletar post
 */
router.delete('/users/:userId/posts/:id', authMiddleware as unknown as RequestHandler, controller.delete as any);

export default router;