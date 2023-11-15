const { Router } = require('express');
const router = Router();
const { getRegistrosVisitantes, createRegistroVisitante, getRegistroVisitante, updateRegistroVisitante, deleteRegistroVisitante, consultaPorLugar, consultaPorVisitante} = require('../controllers/registrosVisitante.controller');

/**
 * @swagger
 * tags:
 *   name: RegistroVisita
 *   description: El gestor de los Registros de Visita
 * /registro:
 *   get:
 *     summary: Devuelve una lista de todas los Registros
 *     tags: [RegistroVisita]
 *     responses:
 *       200:
 *         description: Esta URL devuelve una lista de todas los Registros en formato json
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RegistroVisita'
 *   post:
 *     summary: Crea una nuevo RegistroVisita
 *     tags: [RegistroVisita]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegistroVisita'
 *     responses:
 *       200:
 *         description: Esta URL devuelve un mensaje indicando que se guardo correctamente. NOTA Remover paramentro 'id' es irrelevante.
 *         content:
 *           application/json:
 *             schema:
 *               example: {message: 'RegistroVisita Saved'}
 *       500:
 *         description: Some server error
 * 
 * registro/{id}:
 *   get:
 *     summary: Obtener una lista de los lugares que recorrio el visitante.
 *     tags: [RegistroVisita]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id de la RegistroVisita
 *     responses:
 *       200:
 *         description: Esta URL devuelve el RegistroVisita correspondiente al parametro id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegistroVisita'
 *       404:
 *         description: The RegistroVisita was not found
 *   put:
 *    summary: Modificar el RegistroVisita
 *    tags: [RegistroVisita]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id del RegistroVisita
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/RegistroVisita'
 *    responses:
 *      200:
 *        description: Esta URL devuelve un mensaje si el RegistroVisita fue modificado correctamente
 *        content:
 *          application/json:
 *             schema:
 *               example: {message: 'RegistroVisita Updated'}
 *      404:
 *        description: The RegistroVisita was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Eliminar RegistroVisita
 *     tags: [RegistroVisita]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del RegistroVisita
 *
 *     responses:
 *       200:
 *         description: Esta URL devuelve un mensaje si el RegistroVisita pudo ser eliminado
 *         content:
 *           application/json:
 *              schema:
 *                example: {message: 'RegistroVisita Deleted'}
 *       404:
 *         description: The RegistroVisita was not found
 */
// Aqui va el esquema
/**
 * @swagger
 * components:
 *   schemas:
 *     RegistroVisita:
 *       type: object
 *       required:
 *         - idVisitante
 *         - idLugar
 *         - fecha
 *         - Entrada 
 *         - Salida
 *       properties:
 *         id:
 *           type: String
 *           description: El id auto-generado del RegistroVisita
 *         idVisitante:
 *           type: String
 *           description: El id del Visitante
 *         idLugar:
 *           type: String
 *           description: El id del Lugar
 *         fecha:
 *           type: String
 *           description: fecha de registro
 *         Entrada:
 *           type: String
 *           description: Si entro al lugar
 *         Salida:
 *           type: String
 *           description: Si salio del lugar
 *       example:
 *         id: 6528b29c21f19d729c600b03
 *         idVisitante: 6528b29c21f19d729c600b03
 *         idLugar: 6528b29c21f19d729c600b03
 *         fecha: 31-10-2023 00:47:46
 *         Entrada: True
 *         Salida: True
 */
router.route('/')
.get(getRegistrosVisitantes)
router.route("/into")
.get(createRegistroVisitante)
router.route("/out/:id")
.get(updateRegistroVisitante)
router.route("/visitante/:id")
.get(consultaPorVisitante)
router.route("/lugar/:id")
.get(consultaPorLugar)
router.route('/:id')
.get(getRegistroVisitante)
.delete(deleteRegistroVisitante)
module.exports = router;
