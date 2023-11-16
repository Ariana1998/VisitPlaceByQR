const { Router } = require('express');
const router = Router();
const { getRegistrosVisitantes, createRegistroVisitante, getRegistroVisitante, updateRegistroVisitante, deleteRegistroVisitante, consultaPorLugar, consultaPorVisitante} = require('../controllers/registrosVisitante.controller');

/**
 * @swagger
 * tags:
 *   name: RegistroVisitante
 *   description: El gestor de los registros de los visitantes
 * /api/registro:
 *   get:
 *     summary: Devuelve una lista de todas los Registros
 *     tags: [RegistroVisitante]
 *     responses:
 *       200:
 *         description: Devuelve una lista de todas los registros en formato JSON
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RegistroVisita'
 * 
 * /api/registro/into:
 *   get:
 *     summary: Crea una nuevo registro de visitante
 *     tags: [RegistroVisitante]
 *     parameters:
 *       - in: query
 *         name: lugar
 *         schema:
 *           type: string
 *         required: true
 *         description: id del lugar
 *       - in: query
 *         name: visitante
 *         schema:
 *           type: string
 *         required: true
 *         description: id del visitante
 *     responses:
 *       200:
 *         description: Devuelve un mensaje indicando que se guardo correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               example: {message: 'Registro de visitante guardado'}
 *       500:
 *         description: Some server error
 * 
 * /api/registro/{id}:
 *   get:
 *     summary: Obtener una lista de los lugares que recorrio el visitante por medio de su ID.
 *     tags: [RegistroVisitante]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id de la RegistroVisita
 *     responses:
 *       200:
 *         description: Devuelve el registro del visitante correspondiente al parametro id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegistroVisita'
 *       404:
 *         description: Registro de visitante no encontrado.
 * 
 * /api/registro/out/{id}:
 *   get:
 *    summary: Modificar el registro de visitante
 *    tags: [RegistroVisitante]
 *    parameters:
 *       - in: path
 *         name: idRegistro
 *         schema:
 *           type: id
 *         required: true
 *         description: id del registro
 *    responses:
 *      200:
 *        description: Devuelve un mensaje si el registro de visitante fue modificado correctamente
 *        content:
 *          application/json:
 *             schema:
 *               example: {message: 'Registro de visitante actualizado'}
 *      404:
 *        description: Registro de visitante no encontrado
 *      500:
 *        description: Some error happened
 * 
 * 
 * /api/visitante/{id}:
 *   get:
 *     summary: Obtener una lista de los lugares que recorrio el visitante por medio de su ID.
 *     tags: [RegistroVisitante]
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
 * 
 * /api/lugar/{id}:
 *    get:
 *     summary: Obtener una lista de las personas que han visitado un lugar por su ID.
 *     tags: [RegistroVisitante]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del lugar
 *     responses:
 *       200:
 *         description: Devuelve el historial por medio del ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegistroVisita'
 *       404:
 *         description: The RegistroVisita was not found
 * 
 * /api/registro/:{id}:
 *   
 *   delete:
 *     summary: Elimina el registro de visitante por ID
 *     tags: [RegistroVisitante]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del RegistroVisita
 *
 *     responses:
 *       200:
 *         description: Devuelve un mensaje si el registro visitante pudo ser eliminado
 *         content:
 *           application/json:
 *              schema:
 *                example: {message: 'Registro del visitante eliminado'}
 *       404:
 *         description: Registro de visitante no encontrado
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
 *         - fechaEntrada
 *         - fechaSalida
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
