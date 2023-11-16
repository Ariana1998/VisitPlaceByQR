const { Router } = require('express');
const router = Router();
const {getVisitante,getVisitantes,createVisitante, deleteVisitante, login} = require('../controllers/visitantes.controller');

/**
 * @swagger
 * tags:
 *   name: Visitante
 *   description: Encargado de gestionar los Visitantes
 * /api/visitante:
 *   get:
 *     summary: Lista de todos los Visitantes
 *     tags: [Visitante]
 *     responses:
 *       200:
 *         description: Se encarga de traer la lista de los visitantes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Visitante'
 *   post:
 *     summary: Crea un nuevo Visitante
 *     tags: [Visitante]
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
 * /api/visitante/{id}:
 *   get:
 *     summary: Obtener a un visitante por medio de su ID
 *     tags: [Visitante]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del visitante
 *     responses:
 *       200:
 *         description: Devuelve el visitante por su ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Visitante'
 *       404:
 *         description: Visitante no fue encontrado
 *   delete:
 *     summary: Elimina el Visitante
 *     tags: [Visitante]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Manda un mensaje notificando que el Visitante fue eliminado
 *     responses:
 *       200:
 *         description: El Visitante fue eliminado
 *       404:
 *         description: Visitante no encontrado
 * /api/visitante/login:
 *   post:
 *     summary: Inicia Sesión
 *     tags: [Visitante]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             example: {"email":"Ariana@gmail.com", "password":"skajdñsdlkjdfñkldjaklsñdjs"}
 *     responses:
 *       200:
 *         description: Avisa si se inicio sesión o no
 *         content:
 *           application/json:
 *             schema:
 *               example: {"message": "Inicio de sesion correcto"}
 *       500:
 *         description: Some server error
 * 
 */
/**
 * 
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