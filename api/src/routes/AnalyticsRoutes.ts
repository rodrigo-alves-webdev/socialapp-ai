import { Router, RequestHandler } from 'express';

import { authMiddleware } from '../middlewares/AuthMiddleware';

import controller from '../controllers/AnalyticsController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Analytics
 *   description: Gerenciamento de dados analíticos
 */

/**
 * @swagger
 * /api/analytics/{postId}:
 *   get:
 *     summary: Retorna os dados analíticos de um post
 *     tags: [Analytics]
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do post
 *     responses:
 *       200:
 *         description: Dados analíticos encontrados
 *       404:
 *         description: Dados analíticos não encontrados
 *       500:
 *         description: Erro ao buscar dados analíticos
 */
router.get('/:postId', authMiddleware as unknown as RequestHandler, controller.getByPostId as any);

/**
 * @swagger
 * /api/analytics/{postId}:
 *   put:
 *     summary: Atualiza os dados analíticos de um post
 *     tags: [Analytics]
 *     parameters:
 *       - in: path
 *         name: postId
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
 *               views:
 *                 type: number
 *               likes:
 *                 type: number
 *               shares:
 *                 type: number
 *     responses:
 *       200:
 *         description: Dados analíticos atualizados com sucesso
 *       500:
 *         description: Erro ao atualizar dados analíticos
 */
router.put('/:postId', authMiddleware as unknown as RequestHandler, controller.update as any);

export default router;