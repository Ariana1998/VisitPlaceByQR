const { Router } = require('express');
const router = Router();
const {getVisitante,getVisitantes,createVisitante, deleteVisitante, login} = require('../controllers/visitantes.controller');

/**
 * @swagger
 * tags:
 *   name: Visitantes
 *   description: Encargado de gestionar los Visitantes
 * /Visitantes:
 *   get:
 *     summary: Lista de todos los Visitantes
 *     tags: [Visitantes]
 *     responses:
 *       200:
 *         description: Se encarga de traer la lista de los usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Visitante'
 *   post:
 *     summary: Crea un nuevo Visitante
 *     tags: [Visitantes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Visitante'
 *     responses:
 *       200:
 *         description: Manda un mensaje donde avisa que se creo el Visitante
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Visitante'
 *       500:
 *         description: Some server error
 * 
 * 
 *   delete:
 *     summary: Elimina el Visitante
 *     tags: [Visitantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Manda un mensaje notificando que el Visitante fue eliminado
 *
 *     responses:
 *       200:
 *         description: El Visitante fue eliminado
 *       404:
 *         description: Visitante no encontrado
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Visitante:
 *       type: object
 *       required:
 *         - nombre
 *         - email
 *         - password
 *         - categoria
 *       properties:
 *         id:
 *           type: string
 *           description: ID autogenerado del Visitante
 *         nombre:
 *           type: string
 *           description: Nombre del Visitante
 *         email:
 *           type: string
 *           description: Email del Visitante
 *         password:
 *           type: string
 *           description: Password del Visitante
 *         categoria:
 *           type: string
 *           description: Categoria del Visitante
 *       example:
 *         id: d5fE_asz
 *         nombre: Ariana Espinoza
 *         email: Ariana@gmail.com
 *         password: asdiasjdalsjdlaksdj
 *         categoria: Estudiante
 */

router.route('/')
    .get(getVisitantes)
    .post(createVisitante)
router.route('/:id')
    .delete(deleteVisitante)
    .get(getVisitante)
router.route('/login')
    .post(login)

    
    
module.exports = router;